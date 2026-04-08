import { motion } from 'framer-motion';
import { FiX as X } from 'react-icons/fi';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { useEffect } from 'react';
import { flowData } from '../data/flowData';
interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const data = flowData[projectId];

  if (!data) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-surface w-full max-w-5xl h-[80vh] rounded-2xl border border-white/10 overflow-hidden flex flex-col relative"
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div>
            <h3 className="text-2xl font-bold text-white">System Architecture Flow</h3>
            <p className="text-gray-400 text-sm mt-1">Interactive data flow diagram</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>
        
        <div className="flex-grow bg-[#0a0a0a] relative">
          <ReactFlow 
            nodes={data.nodes} 
            edges={data.edges}
            fitView
            proOptions={{ hideAttribution: true }}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
          >
            <Background color="#333" gap={16} />
            <Controls className="!bg-surface !border-white/10 !fill-white" />
          </ReactFlow>
        </div>
      </motion.div>
    </motion.div>
  );
}
