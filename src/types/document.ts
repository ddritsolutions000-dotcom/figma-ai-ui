/**
 * Canonical DesignDocument model and scene-graph types for Figma AI
 */

export interface ColorToken {
  id: string;
  name: string;
  variable: string;
  value: string;
  ratio: string;
  contrastGrade: 'AAA' | 'AA' | 'Base';
  category: 'primary' | 'secondary' | 'accent' | 'surface' | 'neutral' | 'error';
}

export interface TypographyToken {
  id: string;
  name: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  sampleText: string;
  usage: string;
}

export interface DesignSystemTokenState {
  version: string;
  syncStatus: string;
  colors: ColorToken[];
  typography: TypographyToken[];
  spacingBaseline: string;
  cornerRadius: string;
}

export interface CanvasNode {
  id: string;
  name: string;
  type: 'frame' | 'component' | 'instance' | 'text' | 'image' | 'rectangle' | 'vector' | 'group';
  parentId?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  borderRadius?: number;
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number;
  strokePosition?: 'inside' | 'center' | 'outside';
  opacity?: number;
  isLocked?: boolean;
  isVisible?: boolean;
  autoLayout?: {
    direction: 'horizontal' | 'vertical' | 'none';
    gap: number;
    paddingX: number;
    paddingY: number;
    align: 'start' | 'center' | 'end' | 'between';
  };
  typography?: {
    fontFamily: string;
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
    letterSpacing?: string;
    color: string;
  };
  effects?: Array<{
    type: 'drop-shadow' | 'inner-shadow' | 'blur';
    x?: number;
    y?: number;
    blur?: number;
    spread?: number;
    color?: string;
  }>;
  children?: CanvasNode[];
  componentId?: string;
  imageUrl?: string;
  imageAlt?: string;
  textContent?: string;
}

export interface InteractionNoodle {
  id: string;
  sourceNodeId: string;
  targetFrameId: string;
  trigger: 'onTap' | 'onDragDown' | 'onRelease' | 'onHover';
  action: 'openOverlay' | 'navigate' | 'snapBack' | 'closeOverlay';
  transition: 'smartAnimate' | 'spring' | 'instant' | 'dissolve';
  physics: {
    damping: number;
    stiffness: number;
    mass: number;
    velocity?: number;
    resistance?: number;
    overshootDampening?: number;
    snapThreshold?: number;
  };
}

export interface PrototypeFlow {
  id: string;
  name: string;
  stepsCount: number;
  startingFrameId: string;
  activeScreenId: string;
  noodles: InteractionNoodle[];
}

export interface AIPlanningStage {
  id: string;
  title: string;
  progress: number;
  status: 'completed' | 'in_progress' | 'queued';
  description: string;
}

export interface AIPlanningData {
  projectBrief: {
    name: string;
    version: string;
    summary: string;
    targetPersona: string;
    coreJTBD: string;
    keyDifferentiator: string;
  };
  competitiveIntelligence: Array<{
    title: string;
    metric: string;
    metricType: 'positive' | 'neutral' | 'adopted';
    description: string;
  }>;
  screenNodes: Array<{
    id: string;
    title: string;
    status: 'ready' | 'compiling' | 'queued';
    layersCount: number;
    componentsCount: number;
    thumbUrl: string;
    thumbAlt: string;
  }>;
  agentStreamLogs: Array<{
    timestamp: string;
    agent: string;
    message: string;
    status: 'done' | 'active' | 'passed';
  }>;
}

export interface DesignDocument {
  id: string;
  title: string;
  activePage: string;
  pages: Array<{ id: string; name: string }>;
  frames: CanvasNode[];
  selection: string[];
  tokens: DesignSystemTokenState;
  prototypeFlows: PrototypeFlow[];
  activeFlowId: string;
  aiPlanning: AIPlanningData;
  history: {
    past: any[];
    future: any[];
  };
}
