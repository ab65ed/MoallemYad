import { useState } from 'react';
import { Settings, Save, RefreshCw, Database, Shield, Bell, Palette } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import CategoryManager from '@/components/CategoryManager';

export default function AdminSettings() {
  const { user } = useAuth();
  const [galleryCategories, setGalleryCategories] = useState({
    teaching: 'تدریس',
    personal: 'شخصی',
    sports: 'ورزش',
    family: 'خانوادگی',
    artistic: 'فعالیت‌های هنری',
    travel: 'سفر و ایرانگردی'
  });

  const [testimonialCategories, setTestimonialCategories] = useState({
    student: 'جامعه هنری',
    colleague: 'روزنامه ها و جراید',
    friend: 'اهالی ورزش',
    family: 'دوستان و آشنایان',
    intellectuals: 'فرهیختگان و معلمین'
  });

  const [settings, setSettings] = useState({
    siteName: 'یادبود مجازی همیشه معلم، مسعود محمدی',
    maxFileSize: 100, // MB
    allowedImageFormats: ['jpg', 'jpeg', 'png', 'webp'],
    allowedVideoFormats: ['mp4', 'webm', 'ogg'],
    enableNotifications: true,
    autoBackup: true,
    backupInterval: 24, // hours
    maintenanceMode: false
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = () => {
    // در پروژه واقعی، اینجا تنظیمات به سرور ارسال می‌شود
    console.log('Settings saved:', settings);
    alert('تنظیمات با موفقیت ذخیره شد');
  };

  const handleBackupNow = () => {
    // در پروژه واقعی، اینجا درخواست backup به سرور ارسال می‌شود
    alert('پشتیبان‌گیری شروع شد');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Admin Header Bar */}
      <div className="bg-gradient-to-r from-[#00a693] to-[#eeaa22] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Title */}
            <div className="flex items-center">
              <Settings className="w-8 h-8 text-white ml-3" />
              <h1 className="text-2xl font-bold text-white">تنظیمات سیستم</h1>
            </div>
            
            {/* Right Side - Action Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="flex items-center px-4 py-2 bg-blue-500/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600 transition-all duration-300 border border-blue-400/50"
                title="بازگشت به سایت اصلی"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                سایت اصلی
              </a>
              <a
                href="/admin"
                className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                title="بازگشت به داشبورد"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                داشبورد
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-gray-600">
              مدیریت تنظیمات و پیکربندی سیستم
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* General Settings */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
          <div className="flex items-center mb-6">
            <Palette className="w-6 h-6 text-[#00a693] ml-2" />
            <h2 className="text-2xl font-bold text-gray-800">تنظیمات عمومی</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نام سایت</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleSettingChange('siteName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">حداکثر حجم فایل (مگابایت)</label>
              <input
                type="number"
                value={settings.maxFileSize}
                onChange={(e) => handleSettingChange('maxFileSize', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">فرمت‌های مجاز تصویر</label>
              <input
                type="text"
                value={settings.allowedImageFormats.join(', ')}
                onChange={(e) => handleSettingChange('allowedImageFormats', e.target.value.split(', '))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                placeholder="jpg, png, webp"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">فرمت‌های مجاز ویدیو</label>
              <input
                type="text"
                value={settings.allowedVideoFormats.join(', ')}
                onChange={(e) => handleSettingChange('allowedVideoFormats', e.target.value.split(', '))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                placeholder="mp4, webm, ogg"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-[#00a693] ml-2" />
            <h2 className="text-2xl font-bold text-gray-800">تنظیمات سیستم</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">فعال‌سازی اعلان‌ها</h3>
                <p className="text-sm text-gray-600">دریافت اعلان برای فعالیت‌های جدید</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enableNotifications}
                  onChange={(e) => handleSettingChange('enableNotifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00a693]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00a693]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">پشتیبان‌گیری خودکار</h3>
                <p className="text-sm text-gray-600">پشتیبان‌گیری منظم از اطلاعات</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoBackup}
                  onChange={(e) => handleSettingChange('autoBackup', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00a693]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00a693]"></div>
              </label>
            </div>

            {settings.autoBackup && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">فاصله زمانی پشتیبان‌گیری (ساعت)</label>
                <input
                  type="number"
                  value={settings.backupInterval}
                  onChange={(e) => handleSettingChange('backupInterval', parseInt(e.target.value))}
                  className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                />
              </div>
            )}

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">حالت تعمیر و نگهداری</h3>
                <p className="text-sm text-gray-600">غیرفعال کردن موقت سایت</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.maintenanceMode}
                  onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Backup & Database */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
          <div className="flex items-center mb-6">
            <Database className="w-6 h-6 text-[#00a693] ml-2" />
            <h2 className="text-2xl font-bold text-gray-800">پشتیبان‌گیری و پایگاه داده</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">آخرین پشتیبان‌گیری</h3>
              <p className="text-sm text-gray-600 mb-4">۲۵ اسفند ۱۴۰۲ - ۱۴:۳۰</p>
              <button
                onClick={handleBackupNow}
                className="flex items-center px-4 py-2 bg-[#00a693] text-white rounded-lg hover:bg-[#00a693]/80 transition-colors duration-300"
              >
                <RefreshCw className="w-4 h-4 ml-1" />
                پشتیبان‌گیری فوری
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">وضعیت پایگاه داده</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>تصاویر:</span>
                  <span className="font-medium">۱۲۳ فایل</span>
                </div>
                <div className="flex justify-between">
                  <span>ویدیوها:</span>
                  <span className="font-medium">۴۵ فایل</span>
                </div>
                <div className="flex justify-between">
                  <span>دل‌نوشته‌ها:</span>
                  <span className="font-medium">۶۷ مورد</span>
                </div>
                <div className="flex justify-between font-medium text-[#00a693]">
                  <span>حجم کل:</span>
                  <span>۲.۳ گیگابایت</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Management */}
        <CategoryManager
          categories={galleryCategories}
          onCategoryUpdate={setGalleryCategories}
          type="gallery"
        />

        <CategoryManager
          categories={testimonialCategories}
          onCategoryUpdate={setTestimonialCategories}
          type="testimonial"
        />

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSaveSettings}
            className="flex items-center px-8 py-4 bg-gradient-to-r from-[#00a693] to-[#eeaa22] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-lg"
          >
            <Save className="w-6 h-6 ml-2" />
            ذخیره تمام تنظیمات
          </button>
        </div>

      </div>
    </div>
  );
}