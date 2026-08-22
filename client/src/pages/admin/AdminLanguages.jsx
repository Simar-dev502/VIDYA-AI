import { useState } from 'react';
import { Plus, Trash2, Globe } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';
import { languages } from '../../data/mockData';

const AdminLanguages = () => {
  const [langList, setLangList] = useState(languages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLang, setNewLang] = useState({ code: '', label: '', native: '' });

  const handleAdd = () => {
    if (!newLang.code || !newLang.label) return;
    setLangList([...langList, newLang]);
    setNewLang({ code: '', label: '', native: '' });
    setIsModalOpen(false);
  };

  const handleDelete = (code) => {
    setLangList(langList.filter((l) => l.code !== code));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Languages</h1>
          <p className="mt-1 text-ink-light">Manage supported languages</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Language
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {langList.map((lang) => (
          <Card key={lang.code} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{lang.native}</h3>
                <p className="text-xs text-ink-light">{lang.label}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => handleDelete(lang.code)}>
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </Card>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Language">
        <div className="space-y-4">
          <Input
            label="Language Code"
            value={newLang.code}
            onChange={(e) => setNewLang({ ...newLang, code: e.target.value })}
            placeholder="e.g. ta"
          />
          <Input
            label="Language Name"
            value={newLang.label}
            onChange={(e) => setNewLang({ ...newLang, label: e.target.value })}
            placeholder="e.g. Tamil"
          />
          <Input
            label="Native Name"
            value={newLang.native}
            onChange={(e) => setNewLang({ ...newLang, native: e.target.value })}
            placeholder="e.g. தமிழ்"
          />
          <Button className="w-full" onClick={handleAdd}>
            Add Language
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminLanguages;