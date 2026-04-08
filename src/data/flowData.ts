import type { Node, Edge } from 'reactflow';
import { MarkerType } from 'reactflow';

const defaultEdgeOptions = {
  animated: true,
  style: { stroke: '#4f46e5', strokeWidth: 2 },
  markerEnd: { type: MarkerType.ArrowClosed, color: '#4f46e5' },
};

const createNode = (id: string, label: string, x: number, y: number, type: string = 'default') => ({
  id,
  type,
  position: { x, y },
  data: { label },
  style: { 
    background: '#171717', 
    color: '#fff', 
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '14px',
    width: 200,
    textAlign: 'center' as const
  }
});

export const flowData: Record<string, { nodes: Node[], edges: Edge[] }> = {
  "weatherwise-bot": {
    nodes: [
      createNode('1', 'IMD Data Sources (Scraped)', 250, 0, 'input'),
      createNode('2', 'Data Processing Engine', 250, 100),
      createNode('3', 'Rule-Based Alerting System', 250, 200),
      createNode('4', 'Critical Zones Warning', 50, 300, 'output'),
      createNode('5', 'React UI Dashboard', 450, 300, 'output'),
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', ...defaultEdgeOptions, label: 'Fetch Live Data' },
      { id: 'e2-3', source: '2', target: '3', ...defaultEdgeOptions, label: 'Transform & Filter' },
      { id: 'e3-4', source: '3', target: '4', ...defaultEdgeOptions, label: 'Trigger Alerts', style: { stroke: '#ef4444', strokeWidth: 2 } },
      { id: 'e3-5', source: '3', target: '5', ...defaultEdgeOptions, label: 'Visually Render' },
    ]
  },
  "spring-batch": {
    nodes: [
      createNode('1', 'Data Source (Raw Files/CSV)', 250, 0, 'input'),
      createNode('2', 'Spring Batch ItemReader', 250, 100),
      createNode('3', 'ItemProcessor (Transform)', 250, 200),
      createNode('4', 'ItemWriter (Chunk Logic)', 250, 300),
      createNode('5', 'PostgreSQL Data Warehouse', 250, 400, 'output'),
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', ...defaultEdgeOptions },
      { id: 'e2-3', source: '2', target: '3', ...defaultEdgeOptions, label: 'Chunk of 1000' },
      { id: 'e3-4', source: '3', target: '4', ...defaultEdgeOptions },
      { id: 'e4-5', source: '4', target: '5', ...defaultEdgeOptions, label: 'Bulk Insert' },
    ]
  },
  "sms-engine": {
    nodes: [
      createNode('1', 'Client Request (Send SMS)', 250, 0, 'input'),
      createNode('2', 'NestJS API Gateway', 250, 100),
      createNode('3', 'Redis Cache (Rate Limiting)', 30, 150),
      createNode('4', 'Routing Engine Logic', 250, 200),
      createNode('5', 'Primary Provider (e.g. Twilio)', 100, 300),
      createNode('6', 'Fallback Provider (e.g. Plivo)', 400, 300),
      createNode('7', 'MongoDB (Delivery Logs)', 250, 400, 'output'),
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', ...defaultEdgeOptions },
      { id: 'e2-3', source: '2', target: '3', ...defaultEdgeOptions, animated: false },
      { id: 'e2-4', source: '2', target: '4', ...defaultEdgeOptions },
      { id: 'e4-5', source: '4', target: '5', label: 'Attempt 1', ...defaultEdgeOptions },
      { id: 'e4-6', source: '4', target: '6', label: 'Failover', ...defaultEdgeOptions, style: { stroke: '#ef4444', strokeWidth: 2 } },
      { id: 'e5-7', source: '5', target: '7', ...defaultEdgeOptions },
      { id: 'e6-7', source: '6', target: '7', ...defaultEdgeOptions },
    ]
  },
  "ai-curriculum": {
    nodes: [
      createNode('1', 'User Input (Topic/Grade)', 250, 0, 'input'),
      createNode('2', 'React UI Client', 250, 100),
      createNode('3', 'NestJS Backend', 250, 200),
      createNode('4', 'Gemini AI API', 250, 300),
      createNode('5', 'Curriculum JSON Schema', 250, 400),
      createNode('6', 'Rendered Lesson Plan UI', 250, 500, 'output')
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', ...defaultEdgeOptions },
      { id: 'e2-3', source: '2', target: '3', ...defaultEdgeOptions },
      { id: 'e3-4', source: '3', target: '4', ...defaultEdgeOptions, label: 'Prompt Injection' },
      { id: 'e4-5', source: '4', target: '5', ...defaultEdgeOptions },
      { id: 'e5-6', source: '5', target: '6', ...defaultEdgeOptions },
    ]
  },
  "appraisal": {
    nodes: [
      createNode('1', 'Faculty Submits Form', 250, 0, 'input'),
      createNode('2', 'React.js Frontend', 250, 100),
      createNode('3', 'Node.js/Django Backend', 250, 200),
      createNode('4', 'API Score Calculator Logic', 500, 200),
      createNode('5', 'PostgreSQL Database', 250, 300),
      createNode('6', 'Admin Dashboard Metrics', 250, 400, 'output')
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', ...defaultEdgeOptions },
      { id: 'e2-3', source: '2', target: '3', ...defaultEdgeOptions },
      { id: 'e3-4', source: '3', target: '4', ...defaultEdgeOptions, animated: false },
      { id: 'e4-3', source: '4', target: '3', ...defaultEdgeOptions, animated: false },
      { id: 'e3-5', source: '3', target: '5', ...defaultEdgeOptions },
      { id: 'e5-6', source: '5', target: '6', ...defaultEdgeOptions },
    ]
  },
  "rbac-flow": {
    nodes: [
      createNode('1', 'Authentication Payload', 250, 0, 'input'),
      createNode('2', '1 Superadmin', 50, 100),
      createNode('3', '5 Admins', 250, 100),
      createNode('4', 'Infinite Users', 450, 100),
      createNode('5', 'RBAC Middleware Engine', 250, 200),
      createNode('6', 'Full Access (All Rights)', 50, 320, 'output'),
      createNode('7', 'Deactivate Users / CRUD Courses', 250, 320, 'output'),
      createNode('8', 'Restricted Section Privileges', 450, 320, 'output')
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', ...defaultEdgeOptions, animated: false },
      { id: 'e1-3', source: '1', target: '3', ...defaultEdgeOptions, animated: false },
      { id: 'e1-4', source: '1', target: '4', ...defaultEdgeOptions, animated: false },
      { id: 'e2-5', source: '2', target: '5', ...defaultEdgeOptions, label: 'Validates' },
      { id: 'e3-5', source: '3', target: '5', ...defaultEdgeOptions, label: 'Validates' },
      { id: 'e4-5', source: '4', target: '5', ...defaultEdgeOptions, label: 'Validates' },
      { id: 'e5-6', source: '5', target: '6', ...defaultEdgeOptions, style: { stroke: '#10b981', strokeWidth: 2 } },
      { id: 'e5-7', source: '5', target: '7', ...defaultEdgeOptions, style: { stroke: '#3b82f6', strokeWidth: 2 } },
      { id: 'e5-8', source: '5', target: '8', ...defaultEdgeOptions, style: { stroke: '#8b5cf6', strokeWidth: 2 } },
    ]
  }
};
