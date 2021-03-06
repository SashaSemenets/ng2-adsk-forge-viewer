/// <reference types="forge-viewer" />
export declare abstract class ViewerEventArgs {
    target?: Autodesk.Viewing.Viewer3D;
    model?: Autodesk.Viewing.ViewerItem;
    type: string;
    [key: string]: any;
}
export declare class AggregationSelectionChangedEventArgs extends ViewerEventArgs {
    selections: Autodesk.Viewing.ViewerItem[];
    type: string;
}
export declare class AnimationReadyEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class CameraChangedEventArgs extends ViewerEventArgs {
    camera: THREE.Camera;
    type: string;
}
export declare class CutplanesChangedEventArgs extends ViewerEventArgs {
    cutplanes: Object[];
    type: string;
}
export declare class EscapeEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class ExplodeChangedEventArgs extends ViewerEventArgs {
    scale: number;
    type: string;
}
export declare abstract class ExtensionLoadedUnloadedEventArgs extends ViewerEventArgs {
    extensionId: string;
}
export declare class ExtensionLoadedEventArgs extends ExtensionLoadedUnloadedEventArgs {
    type: string;
}
export declare class ExtensionUnloadedEventArgs extends ExtensionLoadedUnloadedEventArgs {
    type: string;
}
export declare class FinalFrameRenderedChangedEventArgs extends ViewerEventArgs {
    planes: Object[];
    type: string;
}
export declare class FitToViewEventArgs extends ViewerEventArgs {
    immediate: boolean;
    nodeIdArray: number[];
    type: string;
}
export declare class FragmentsLoadedEventArgs extends ViewerEventArgs {
    getFragIds: () => void;
    data: Object;
    type: string;
}
export declare class FullscreenEventArgs extends ViewerEventArgs {
    mode: Autodesk.Viewing.ScreenMode;
    type: string;
}
export declare class GeometryLoadedEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class HideEventArgs extends ViewerEventArgs {
    nodeIdArray: number[];
    type: string;
}
export declare class HyperlinkEventArgs extends ViewerEventArgs {
    data: Object;
    type: string;
}
export declare class IsolateEventArgs extends ViewerEventArgs {
    nodeIdArray: number[];
    type: string;
}
export declare class LayerVisibilityEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class LoadMissingGeometryEventArgs extends ViewerEventArgs {
    delay: boolean;
    type: string;
}
export declare class ModelRootLoadedEventArgs extends ViewerEventArgs {
    svf: Object;
    type: string;
}
export declare class ModelUnloadedEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class NavigationModeChangedEventArgs extends ViewerEventArgs {
    id: string;
    type: string;
}
export declare abstract class ObjectTreeEventArgs extends ViewerEventArgs {
    svf: Object;
}
export declare class ObjectTreeCreatedEventArgs extends ObjectTreeEventArgs {
    type: string;
}
export declare class ObjectTreeUnavailableEventArgs extends ObjectTreeEventArgs {
    type: string;
}
export declare abstract class PrefEventArgs extends ViewerEventArgs {
    name: string;
    value: Object;
}
export declare class PrefChangedEventArgs extends PrefEventArgs {
    type: string;
}
export declare class PrefResetEventArgs extends PrefEventArgs {
    type: string;
}
export declare class ProgressUpdateEventArgs extends ViewerEventArgs {
    percent: number;
    state: Autodesk.Viewing.ProgressState;
    type: string;
}
export declare class RenderOptionChangedEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class RenderPresentedEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class ResetEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class RestoreDefaultSettingsEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class SelectionChangedEventArgs extends ViewerEventArgs {
    fragIdsArray: number[];
    dbIdArray: number[];
    nodeArray: number[];
    type: string;
}
export declare class ShowEventArgs extends ViewerEventArgs {
    nodeArrayId: number[];
    type: string;
}
export declare class TexturesLoadedEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class ToolChangedEventArgs extends ViewerEventArgs {
    toolName: string;
    tool: Object;
    active: boolean;
    type: string;
}
export declare class ViewerInitializedEventArgs extends ViewerEventArgs {
    type: string;
}
export declare class ViewerResizeEventArgs extends ViewerEventArgs {
    width: number;
    height: number;
    type: string;
}
export declare class ViewerStateRestoredEventArgs extends ViewerEventArgs {
    value: boolean;
    type: string;
}
export declare class ViewerUnInitializedEventArgs extends ViewerEventArgs {
    type: string;
}
/**
 * Base extension that all other extensions can inherit from
 */
export declare abstract class Extension {
    static extensionName: string;
    protected viewer: Autodesk.Viewing.Viewer3D;
    protected extOptions: Autodesk.Viewing.ExtensionOptions;
    protected eventArgsTypeMap: {
        [key: string]: Function;
    };
    static registerExtension(extensionName: string, extension: Object): void;
    static unregisterExtension(extensionName: string): void;
    constructor(viewer: Autodesk.Viewing.Viewer3D, options?: Autodesk.Viewing.ExtensionOptions);
    /** Called by Autodesk extension manager when extension is loaded */
    abstract load(): void;
    /** Called by Autodesk extension manager when extension is unloaded */
    abstract unload(): void;
    /** Register event args types that we will cast to 'proper' objects */
    protected registerEventTypes(): void;
    /** Cast Viewer event args to class */
    protected castArgs(args: any): any;
}
