import { useState } from 'react';
import { Plus, Trash2, BookOpen } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';
import { subjects } from '../../data/mockData';

const AdminSubjects = () => {
  const [subjectList, setSubjectList] = useState(subjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSubject, setNewSubject] = useState({ name: '', icon: '📚' });

  const handleAdd = () => {
    if (!newSubject.name) return;
    setSubjectList([
      ...subjectList,
      { id: `sub-${Date.now()}`, name: newSubject.name, icon: newSubject.icon, color: 'bg-slate-100 text-slate-600' },
    ]);
    setNewSubject({ name: '', icon: '📚' });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setSubjectList(subjectList.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Subjects</h1>
          <p className="mt-1 text-ink-light">Manage platform subjects</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Subject
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {subjectList.map((subject) => (
          <Card key={subject.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${subject.color}`}>
                {subject.icon}
              </div>
              <h3 className="font-semibold">{subject.name}</h3>
            </div>
            <Button variant="ghost" size="sm" onClick={() => handleDelete(subject.id)}>
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </Card>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Subject">
        <div className="space-y-4">
          <Input
            label="Subject Name"
            value={newSubject.name}
            onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
            placeholder="e.g. Computer Science"
          />
          <Input
            label="Icon (emoji)"
            value={newSubject.icon}
            onChange={(e) => setNewSubject({ ...newSubject, icon: e.target.value })}
            placeholder="e.g. 💻"
          />
          <Button className="w-full" onClick={handleAdd}>
            Add Subject
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminSubjects;