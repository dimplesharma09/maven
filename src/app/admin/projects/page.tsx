"use client";

import React, { useState } from "react";
import { Plus, Download, Filter, Search } from "lucide-react";

import AdminLayout from "@/components/admin/AdminLayout";
import ProjectTable from "@/components/admin/ProjectTable";
import ProjectForm from "@/components/admin/ProjectForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface Project {
  id: string;
  name: string;
  category: string;
  location: string;
  status: string;
  description: string;
  lastUpdated: string;
}

const INITIAL_PROJECTS: Project[] = [
  {
    id: "PROJ-001",
    name: "Skyline Villa",
    category: "Residential",
    location: "Malibu, CA",
    status: "In Progress",
    description: "Multi-level luxury residence with panoramic ocean views and sustainable glass architecture.",
    lastUpdated: "2024-03-25",
  },
  {
    id: "PROJ-002",
    name: "Nexus Office Hub",
    category: "Commercial",
    location: "Austin, TX",
    status: "Completed",
    description: "Biophilic office space designed for tech collaboration with integrated indoor gardens.",
    lastUpdated: "2024-02-12",
  },
  {
    id: "PROJ-003",
    name: "Lakeside Retreat",
    category: "Residential",
    location: "Lake Tahoe, NV",
    status: "Planning",
    description: "Modern timber-framed cabin focused on low-impact construction and native material sourcing.",
    lastUpdated: "2024-04-01",
  },
  {
    id: "PROJ-004",
    name: "Urban Loft",
    category: "Interior",
    location: "New York, NY",
    status: "In Progress",
    description: "Industrial conversion into an open-plan contemporary living space with brutalist accents.",
    lastUpdated: "2024-03-28",
  },
  {
    id: "PROJ-005",
    name: "Golden Gate Hotel",
    category: "Hospitality",
    location: "San Francisco, CA",
    status: "Planning",
    description: "Boutique hotel restoration featuring heritage preservation and modern luxury interiors.",
    lastUpdated: "2024-03-15",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleAddProject = (data: any) => {
    const newProject: Project = {
      id: `PROJ-${String(projects.length + 1).padStart(3, '0')}`,
      name: data.name,
      category: data.category,
      location: data.location,
      description: data.description,
      status: "In Progress",
      lastUpdated: new Date().toISOString().split('T')[0],
    };
    setProjects([newProject, ...projects]);
    setIsNewProjectModalOpen(false);
  };

  const handleUpdateProject = (data: any) => {
    if (!editingProject) return;
    setProjects(projects.map(p => p.id === editingProject.id ? { 
      ...p, 
      ...data,
      lastUpdated: new Date().toISOString().split('T')[0]
    } : p));
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-3xl font-display font-black text-[#121212] uppercase tracking-tighter">
              Projects Management
            </h1>
            <p className="text-gray-500 mt-1">Manage, edit, and showcase your architectural portfolio.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-white border-gray-200 text-xs font-bold uppercase tracking-widest px-6 h-11">
              <Download size={14} className="mr-2" /> Export CSV
            </Button>
            
            <Dialog 
              open={isNewProjectModalOpen || !!editingProject} 
              onOpenChange={(open) => {
                if (!open) {
                  setIsNewProjectModalOpen(false);
                  setEditingProject(null);
                }
              }}
            >
              <DialogTrigger asChild>
                <Button 
                  onClick={() => setIsNewProjectModalOpen(true)}
                  className="bg-[#121212] hover:bg-black text-white text-xs font-bold uppercase tracking-widest px-8 h-11"
                >
                  <Plus size={16} className="mr-2" /> New Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-white border-none shadow-2xl p-0 overflow-hidden">
                <div className="bg-[#121212] p-6 text-white">
                  <DialogHeader className="space-y-1">
                    <DialogTitle className="text-xl font-display font-black uppercase tracking-tight text-[#C25E4B]">
                      {editingProject ? "Edit Project" : "Create New Project"}
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Fill in the details below to {editingProject ? "update the" : "add a new"} project to your architectural portfolio.
                    </DialogDescription>
                  </DialogHeader>
                </div>
                <div className="p-8">
                  <ProjectForm 
                    initialData={editingProject || undefined}
                    onSuccess={editingProject ? handleUpdateProject : handleAddProject} 
                    onCancel={() => {
                      setIsNewProjectModalOpen(false);
                      setEditingProject(null);
                    }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Summary for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#C25E4B] mb-2">Portfolio Total</p>
            <p className="text-3xl font-display font-black text-[#121212]">{projects.length}</p>
            <p className="text-xs text-gray-400 mt-1 font-medium">Projects documented in system</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">Currently Active</p>
            <p className="text-3xl font-display font-black text-[#121212]">
              {projects.filter(p => ["In Progress", "Planning"].includes(p.status)).length}
            </p>
            <p className="text-xs text-gray-400 mt-1 font-medium">Building and design phases</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking_widest text-green-600 mb-2">Recently Completed</p>
            <p className="text-3xl font-display font-black text-[#121212]">
              {projects.filter(p => p.status === "Completed").length}
            </p>
            <p className="text-xs text-gray-400 mt-1 font-medium">Successfully delivered projects</p>
          </div>
        </div>

        {/* Projects List Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-500">Project List</h3>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Showing {projects.length} results</span>
          </div>
          <ProjectTable 
            projects={projects} 
            onDelete={handleDeleteProject}
            onEdit={setEditingProject}
            onAddNew={() => setIsNewProjectModalOpen(true)}
          />
        </div>
      </div>
    </AdminLayout>
  );
}
