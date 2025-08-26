import { useState, useRef } from 'react';
import { Upload, X, Image, Video, Loader2, CheckCircle } from 'lucide-react';

interface FileUploadProps {
  onFileUploaded: (filePath: string, fileType: 'image' | 'video') => void;
  accept?: string;
  maxSize?: number; // در MB
  className?: string;
}

export default function FileUpload({ 
  onFileUploaded, 
  accept = "image/*,video/*", 
  maxSize = 50,
  className = ""
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    path: string;
    type: 'image' | 'video';
  } | null>(null);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // بررسی سایز فایل
    if (file.size > maxSize * 1024 * 1024) {
      setError(`حجم فایل نباید بیشتر از ${maxSize} مگابایت باشد`);
      return;
    }

    setError('');
    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const xhr = new XMLHttpRequest();

      // پیگیری پیشرفت آپلود
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
        }
      });

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setUploadedFile({
            name: response.originalName,
            path: response.filePath,
            type: response.type
          });
          onFileUploaded(response.filePath, response.type);
        } else {
          const errorResponse = JSON.parse(xhr.responseText);
          setError(errorResponse.error || 'خطا در آپلود فایل');
        }
        setUploading(false);
      };

      xhr.onerror = () => {
        setError('خطا در اتصال به سرور');
        setUploading(false);
      };

      xhr.open('POST', '/api/upload');
      
      // اضافه کردن auth header
      const token = localStorage.getItem('admin_token');
      if (token) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      }
      
      xhr.send(formData);

    } catch (error) {
      setError('خطا در آپلود فایل');
      setUploading(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && fileInputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(file);
      fileInputRef.current.files = dt.files;
      handleFileSelect({ target: { files: dt.files } } as any);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const clearFile = () => {
    setUploadedFile(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {!uploadedFile ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
            uploading 
              ? 'border-[#00a693] bg-[#00a693]/5' 
              : 'border-gray-300 hover:border-[#00a693] hover:bg-gray-50'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            className="hidden"
            disabled={uploading}
          />

          {uploading ? (
            <div className="space-y-4">
              <Loader2 className="w-12 h-12 text-[#00a693] animate-spin mx-auto" />
              <div className="space-y-2">
                <p className="text-gray-600">در حال آپلود...</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#00a693] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">{uploadProgress}%</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="w-12 h-12 text-gray-400 mx-auto" />
              <div>
                <p className="text-gray-600 mb-2">
                  فایل خود را اینجا بکشید یا 
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[#00a693] hover:text-[#00a693]/80 font-medium mr-1"
                  >
                    کلیک کنید
                  </button>
                </p>
                <p className="text-sm text-gray-500">
                  فرمت‌های مجاز: JPG, PNG, GIF, MP4, AVI, MOV
                </p>
                <p className="text-sm text-gray-500">
                  حداکثر حجم: {maxSize} مگابایت
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <div className="flex items-center space-x-2">
                {uploadedFile.type === 'image' ? (
                  <Image className="w-5 h-5 text-green-600" />
                ) : (
                  <Video className="w-5 h-5 text-green-600" />
                )}
                <span className="text-green-800 font-medium">{uploadedFile.name}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={clearFile}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-green-600 mt-2">
            فایل با موفقیت آپلود شد: {uploadedFile.path}
          </p>
        </div>
      )}

      {error && (
        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
}