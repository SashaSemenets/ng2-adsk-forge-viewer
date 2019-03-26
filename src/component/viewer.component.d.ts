/// <reference types="three" />
/// <reference types="forge-viewer" />
import { EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { ScriptService } from '../service/script.service';
import { FitToViewEventArgs, FullscreenEventArgs, GeometryLoadedEventArgs, HideEventArgs, IsolateEventArgs, ObjectTreeCreatedEventArgs, ObjectTreeUnavailableEventArgs, ResetEventArgs, SelectionChangedEventArgs, ShowEventArgs, ViewerEventArgs } from '../extensions/extension';
import { BasicExtension } from '../extensions/basic-extension';
export interface DocumentChangedEvent {
    document: Autodesk.Viewing.Document;
    viewingApplication: Autodesk.Viewing.ViewingApplication;
    viewerComponent: ViewerComponent;
}
export interface ItemLoadedEvent {
    item: Autodesk.Viewing.ViewerItem;
    viewingApplication: Autodesk.Viewing.ViewingApplication;
    currentViewer: Autodesk.Viewing.Viewer3D;
    viewerComponent: ViewerComponent;
}
export interface ViewingApplicationInitializedEvent {
    viewingApplication: Autodesk.Viewing.ViewingApplication;
    viewerComponent: ViewerComponent;
}
export interface ViewerOptions {
    initializerOptions: Autodesk.Viewing.InitializerOptions;
    viewerApplicationOptions?: Autodesk.Viewing.ViewingApplicationOptions;
    viewerConfig?: Autodesk.Viewing.ViewerConfig;
    headlessViewer?: boolean;
    showFirstViewable?: boolean;
    onViewerScriptsLoaded?: () => void;
    onViewingApplicationInitialized: (args: ViewingApplicationInitializedEvent) => void;
}
export declare class ViewerComponent implements OnDestroy {
    private script;
    readonly containerId: string;
    onDocumentChanged: EventEmitter<DocumentChangedEvent>;
    onItemLoaded: EventEmitter<ItemLoadedEvent>;
    onError: EventEmitter<Autodesk.Viewing.ErrorCodes>;
    onFitToView: EventEmitter<FitToViewEventArgs>;
    onFullscreen: EventEmitter<FullscreenEventArgs>;
    onGeometryLoaded: EventEmitter<GeometryLoadedEventArgs>;
    onHide: EventEmitter<HideEventArgs>;
    onIsolate: EventEmitter<IsolateEventArgs>;
    onObjectTreeCreated: EventEmitter<ObjectTreeCreatedEventArgs>;
    onObjectTreeUnavailable: EventEmitter<ObjectTreeUnavailableEventArgs>;
    onReset: EventEmitter<ResetEventArgs>;
    onSelectionChanged: EventEmitter<SelectionChangedEventArgs>;
    onShow: EventEmitter<ShowEventArgs>;
    showDebugMessages: boolean;
    private _viewerOptions;
    private viewerInitialized;
    private viewerApp;
    private documentId;
    private unsubscribe;
    private basicExt;
    /**
     * Helper to allow callers to specify documentId with or without the required urn: prefix
     */
    private static verifyUrn(documentId);
    constructor(script: ScriptService);
    viewerOptions: ViewerOptions;
    ngOnDestroy(): void;
    /**
     * Helper method to get some default viewer options
     */
    getDefaultViewerOptions(onViewingApplicationInitialized: (args: ViewingApplicationInitializedEvent) => void, getAccessToken: (onGetAccessToken: (token: string, expire: number) => void) => void): ViewerOptions;
    /**
     * Get a reference to the current viewing application
     */
    readonly ViewerApplication: Autodesk.Viewing.ViewingApplication;
    /**
     * Get a reference to the current 3D viewer
     */
    readonly Viewer3D: Autodesk.Viewing.Viewer3D;
    /**
     * Get the document urn that has been loaded
     */
    /**
     * Set the document urn, which triggers the viewer to load the document
     */
    DocumentId: string;
    readonly basicExtension: BasicExtension;
    readonly extensionEvents: Observable<ViewerEventArgs> | null;
    selectItem(item: Autodesk.Viewing.ViewerItem | Autodesk.Viewing.BubbleNode): void;
    /**
     * We don't bundle Autodesk's scripts with the component, and we don't really want users to have
     * to add the scripts to their index.html pages. So we'll load them when required.
     */
    private loadScripts();
    /**
     * Initialises a ViewingApplication
     */
    private initialiseApplication();
    private initialized();
    /**
     * Loads a model in to the viewer via it's urn
     */
    private loadDocument(documentId);
    /**
     * Document successfully loaded
     */
    private onDocumentLoadSuccess(document);
    /**
     * Failed to load document
     */
    private onDocumentLoadFailure(errorCode);
    /**
     * View from the document was successfully loaded
     */
    private onItemLoadSuccess(viewer, item);
    /**
     * Failed to load a view from the document
     */
    private onItemLoadFail(errorCode);
    /**
     * Register our BasicExtension with the Forge Viewer
     */
    private registerBasicExtension();
    /**
     * Subscript to BasicExtension events when the extension has been
     * succesfully loaded by the viewer.
     */
    private extensionLoaded(ext);
    private unregisterBasicExtension();
    /**
     * Add list of extensions to the viewer config that has been provided
     * The allows the user to register their own extensions.
     */
    private addBasicExtensionConfig(extName);
    private log(message?, ...optionalParams);
    private error(message?, ...optionalParams);
}
