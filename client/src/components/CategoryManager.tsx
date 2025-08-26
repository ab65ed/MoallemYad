import { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Tag } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description?: string;
  color?: string;
}

interface CategoryManagerProps {
  categories: Record<string, string>;
  onCategoryUpdate: (categories: Record<string, string>) => void;
  type: 'gallery' | 'testimonial';
}

export default function CategoryManager({ categories, onCategoryUpdate, type }: CategoryManagerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCategories, setEditingCategories] = useState<Category[]>(
    Object.entries(categories).map(([id, name]) => ({ id, name }))
  );
  const [newCategory, setNewCategory] = useState({ id: '', name: '' });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSave = () => {
    const updatedCategories: Record<string, string> = {};
    editingCategories.forEach(cat => {
      if (cat.id && cat.name) {
        updatedCategories[cat.id] = cat.name;
      }
    });
    onCategoryUpdate(updatedCategories);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingCategories(Object.entries(categories).map(([id, name]) => ({ id, name })));
    setIsEditing(false);
    setShowAddForm(false);
    setNewCategory({ id: '', name: '' });
  };

  const handleAddCategory = () => {
    if (newCategory.id && newCategory.name) {
      setEditingCategories([...editingCategories, { ...newCategory }]);
      setNewCategory({ id: '', name: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteCategory = (id: string) => {
    setEditingCategories(editingCategories.filter(cat => cat.id !== id));
  };

  const handleUpdateCategory = (id: string, field: 'name', value: string) => {
    setEditingCategories(editingCategories.map(cat => 
      cat.id === id ? { ...cat, [field]: value } : cat
    ));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Tag className="w-6 h-6 text-[#00a693] ml-2" />
          <h3 className="text-xl font-bold text-gray-800">
            مدیریت دسته‌بندی‌های {type === 'gallery' ? 'گالری' : 'دل‌نوشته‌ها'}
          </h3>
        </div>
        
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center px-4 py-2 bg-[#00a693] text-white rounded-lg hover:bg-[#00a693]/80 transition-colors duration-300"
          >
            <Edit className="w-4 h-4 ml-1" />
            ویرایش
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <Save className="w-4 h-4 ml-1" />
              ذخیره
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              <X className="w-4 h-4 ml-1" />
              انصراف
            </button>
          </div>
        )}
      </div>

      {!isEditing ? (
        // Display Mode
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(categories).map(([id, name]) => (
            <div key={id} className="bg-gray-50 rounded-lg p-4 border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{name}</p>
                  <p className="text-sm text-gray-500">کلید: {id}</p>
                </div>
                <div className="w-4 h-4 bg-[#00a693] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Edit Mode
        <div className="space-y-4">
          {editingCategories.map((category, index) => (
            <div key={category.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">کلید دسته</label>
                  <input
                    type="text"
                    value={category.id}
                    onChange={(e) => {
                      const newCategories = [...editingCategories];
                      newCategories[index] = { ...category, id: e.target.value };
                      setEditingCategories(newCategories);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    placeholder="مثال: teaching"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">نام دسته</label>
                  <input
                    type="text"
                    value={category.name}
                    onChange={(e) => handleUpdateCategory(category.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    placeholder="مثال: تدریس"
                  />
                </div>
              </div>
              
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors duration-300"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}

          {/* Add New Category */}
          {showAddForm ? (
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">کلید دسته جدید</label>
                  <input
                    type="text"
                    value={newCategory.id}
                    onChange={(e) => setNewCategory({ ...newCategory, id: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    placeholder="مثال: new_category"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">نام دسته جدید</label>
                  <input
                    type="text"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a693] focus:border-transparent"
                    placeholder="مثال: دسته جدید"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleAddCategory}
                  className="p-2 text-green-500 hover:bg-green-100 rounded-lg transition-colors duration-300"
                >
                  <Save className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setNewCategory({ id: '', name: '' });
                  }}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#00a693] hover:text-[#00a693] transition-colors duration-300"
            >
              <Plus className="w-5 h-5" />
              افزودن دسته جدید
            </button>
          )}
        </div>
      )}
    </div>
  );
}