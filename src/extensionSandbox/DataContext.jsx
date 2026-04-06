import { createContext, useContext, useMemo, useState } from 'react'
import { extensionPreviewData } from './seedData'

const DataContext = createContext(null)

const cloneData = (value) => JSON.parse(JSON.stringify(value))

export function ExtensionPreviewDataProvider({ children, initialData = extensionPreviewData }) {
  const [classes, setClasses] = useState(() => cloneData(initialData.classes))
  const [tasks, setTasks] = useState(() => cloneData(initialData.tasks))

  const value = useMemo(() => ({
    classes,
    tasks,
    isLoading: false,
    addClass: (newClass) => {
      setClasses((current) => [...current, { ...newClass, id: newClass.id || `class-preview-${Date.now()}` }])
    },
    editClass: (id, updatedClass) => {
      setClasses((current) => current.map((item) => (item.id === id ? { ...item, ...updatedClass } : item)))
    },
    deleteClass: (id) => {
      setClasses((current) => current.filter((item) => item.id !== id))
      setTasks((current) => current.filter((item) => item.classId !== id))
    },
    reorderClasses: (newOrder) => {
      setClasses(cloneData(newOrder))
    },
    addTask: (newTask) => {
      setTasks((current) => [...current, { ...newTask, id: newTask.id || `task-preview-${Date.now()}` }])
    },
    editTask: (id, updatedTask) => {
      setTasks((current) => current.map((item) => (item.id === id ? { ...item, ...updatedTask } : item)))
    },
    deleteTask: (id) => {
      setTasks((current) => current.filter((item) => item.id !== id))
    },
    toggleTask: (id) => {
      setTasks((current) => current.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
    },
  }), [classes, tasks])

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  return useContext(DataContext)
}
