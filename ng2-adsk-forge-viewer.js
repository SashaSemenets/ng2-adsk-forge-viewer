import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/map';
import { ChangeDetectionStrategy, Component, EventEmitter, Injectable, Input, NgModule, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class ViewerEventArgs {
}
class AggregationSelectionChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT;
    }
}
class AnimationReadyEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.ANIMATION_READY_EVENT;
    }
}
class CameraChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.CAMERA_CHANGE_EVENT;
    }
}
class CutplanesChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.CUTPLANES_CHANGE_EVENT;
    }
}
class EscapeEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.ESCAPE_EVENT;
    }
}
class ExplodeChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.EXPLODE_CHANGE_EVENT;
    }
}
/**
 * @abstract
 */
class ExtensionLoadedUnloadedEventArgs extends ViewerEventArgs {
}
class ExtensionLoadedEventArgs extends ExtensionLoadedUnloadedEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.EXTENSION_LOADED_EVENT;
    }
}
class ExtensionUnloadedEventArgs extends ExtensionLoadedUnloadedEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.EXTENSION_UNLOADED_EVENT;
    }
}
class FinalFrameRenderedChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.FINAL_FRAME_RENDERED_CHANGED_EVENT;
    }
}
class FitToViewEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.FIT_TO_VIEW_EVENT;
    }
}
class FragmentsLoadedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.FRAGMENTS_LOADED_EVENT;
    }
}
class FullscreenEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.FULLSCREEN_MODE_EVENT;
    }
}
class GeometryLoadedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.GEOMETRY_LOADED_EVENT;
    }
}
class HideEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.HIDE_EVENT;
    }
}
class HyperlinkEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.HYPERLINK_EVENT;
    }
}
class IsolateEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.ISOLATE_EVENT;
    }
}
class LayerVisibilityEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.LAYER_VISIBILITY_CHANGED_EVENT;
    }
}
class LoadMissingGeometryEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.LOAD_MISSING_GEOMETRY;
    }
}
class ModelRootLoadedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT;
    }
}
class ModelUnloadedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.MODEL_UNLOADED_EVENT;
    }
}
class NavigationModeChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.NAVIGATION_MODE_CHANGED_EVENT;
    }
}
/**
 * @abstract
 */
class ObjectTreeEventArgs extends ViewerEventArgs {
}
class ObjectTreeCreatedEventArgs extends ObjectTreeEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT;
    }
}
class ObjectTreeUnavailableEventArgs extends ObjectTreeEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.OBJECT_TREE_UNAVAILABLE_EVENT;
    }
}
/**
 * @abstract
 */
class PrefEventArgs extends ViewerEventArgs {
}
class PrefChangedEventArgs extends PrefEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.PREF_CHANGED_EVENT;
    }
}
class PrefResetEventArgs extends PrefEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.PREF_RESET_EVENT;
    }
}
class ProgressUpdateEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.PROGRESS_UPDATE_EVENT;
    }
}
class RenderOptionChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.RENDER_OPTION_CHANGED_EVENT;
    }
}
class RenderPresentedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.RENDER_PRESENTED_EVENT;
    }
}
class ResetEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.RESET_EVENT;
    }
}
class RestoreDefaultSettingsEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.RESTORE_DEFAULT_SETTINGS_EVENT;
    }
}
class SelectionChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.SELECTION_CHANGED_EVENT;
    }
}
class ShowEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.SHOW_EVENT;
    }
}
class TexturesLoadedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.TEXTURES_LOADED_EVENT;
    }
}
class ToolChangedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.TOOL_CHANGE_EVENT;
    }
}
class ViewerInitializedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.VIEWER_INITIALIZED;
    }
}
class ViewerResizeEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.VIEWER_RESIZE_EVENT;
    }
}
class ViewerStateRestoredEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT;
    }
}
class ViewerUnInitializedEventArgs extends ViewerEventArgs {
    constructor() {
        super(...arguments);
        this.type = Autodesk.Viewing.VIEWER_UNINITIALIZED;
    }
}
/**
 * Base extension that all other extensions can inherit from
 * @abstract
 */
class Extension {
    /**
     * @param {?} viewer
     * @param {?=} options
     */
    constructor(viewer, options) {
        this.viewer = undefined;
        this.extOptions = undefined;
        this.eventArgsTypeMap = {};
        this.viewer = viewer;
        this.extOptions = options;
        this.registerEventTypes();
    }
    /**
     * @param {?} extensionName
     * @param {?} extension
     * @return {?}
     */
    static registerExtension(extensionName, extension) {
        Autodesk.Viewing.theExtensionManager.registerExtension(extensionName, extension);
    }
    /**
     * @param {?} extensionName
     * @return {?}
     */
    static unregisterExtension(extensionName) {
        Autodesk.Viewing.theExtensionManager.unregisterExtension(extensionName);
    }
    /**
     * Register event args types that we will cast to 'proper' objects
     * @return {?}
     */
    registerEventTypes() {
        // tslint:disable:max-line-length
        this.eventArgsTypeMap[Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT] = AggregationSelectionChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.ANIMATION_READY_EVENT] = AnimationReadyEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.CAMERA_CHANGE_EVENT] = CameraChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.CUTPLANES_CHANGE_EVENT] = CutplanesChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.ESCAPE_EVENT] = EscapeEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.EXPLODE_CHANGE_EVENT] = ExplodeChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.EXTENSION_LOADED_EVENT] = ExtensionLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.EXTENSION_UNLOADED_EVENT] = ExtensionUnloadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.FINAL_FRAME_RENDERED_CHANGED_EVENT] = FinalFrameRenderedChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.FIT_TO_VIEW_EVENT] = FitToViewEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.FRAGMENTS_LOADED_EVENT] = FragmentsLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.FULLSCREEN_MODE_EVENT] = FullscreenEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.GEOMETRY_LOADED_EVENT] = GeometryLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.HIDE_EVENT] = HideEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.HYPERLINK_EVENT] = HyperlinkEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.ISOLATE_EVENT] = IsolateEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.LAYER_VISIBILITY_CHANGED_EVENT] = LayerVisibilityEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.LOAD_MISSING_GEOMETRY] = LoadMissingGeometryEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT] = ModelRootLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.MODEL_UNLOADED_EVENT] = ModelUnloadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.NAVIGATION_MODE_CHANGED_EVENT] = NavigationModeChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT] = ObjectTreeCreatedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.OBJECT_TREE_UNAVAILABLE_EVENT] = ObjectTreeUnavailableEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.PREF_CHANGED_EVENT] = PrefChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.PREF_RESET_EVENT] = PrefResetEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.PROGRESS_UPDATE_EVENT] = ProgressUpdateEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.RENDER_OPTION_CHANGED_EVENT] = RenderOptionChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.RENDER_PRESENTED_EVENT] = RenderPresentedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.RESET_EVENT] = ResetEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.RESTORE_DEFAULT_SETTINGS_EVENT] = RestoreDefaultSettingsEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.SELECTION_CHANGED_EVENT] = SelectionChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.SHOW_EVENT] = ShowEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.TEXTURES_LOADED_EVENT] = TexturesLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.TOOL_CHANGE_EVENT] = ToolChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_INITIALIZED] = ViewerInitializedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_RESIZE_EVENT] = ViewerResizeEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT] = ViewerStateRestoredEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_UNINITIALIZED] = ViewerUnInitializedEventArgs;
        // tslint:enable:max-line-length
    }
    /**
     * Cast Viewer event args to class
     * @param {?} args
     * @return {?}
     */
    castArgs(args) {
        if (Array.isArray(args)) {
            return args.map(this.castArgs);
        }
        if (!args || typeof args !== 'object' || !args.hasOwnProperty('type')) {
            // Can't cast this object
            return args;
        }
        // Create new object of appropriate type
        const /** @type {?} */ clazz = this.eventArgsTypeMap[args.type];
        const /** @type {?} */ typedItem = Object.create(clazz.prototype);
        // Cast any properties
        for (const /** @type {?} */ k of Object.keys(args)) {
            typedItem[k] = this.castArgs(args[k]);
        }
        return typedItem;
    }
}
Extension.extensionName = '';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BasicExtension extends Extension {
    constructor() {
        super(...arguments);
        this.eventStreams = [];
        this.events = [
            Autodesk.Viewing.FIT_TO_VIEW_EVENT,
            Autodesk.Viewing.FULLSCREEN_MODE_EVENT,
            Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
            Autodesk.Viewing.HIDE_EVENT,
            Autodesk.Viewing.ISOLATE_EVENT,
            Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
            Autodesk.Viewing.OBJECT_TREE_UNAVAILABLE_EVENT,
            Autodesk.Viewing.RESET_EVENT,
            Autodesk.Viewing.SELECTION_CHANGED_EVENT,
            Autodesk.Viewing.SHOW_EVENT,
        ];
    }
    /**
     * @param {?} extensionName
     * @param {?} callback
     * @return {?}
     */
    static registerExtension(extensionName, callback) {
        BasicExtension.callback = callback;
        super.registerExtension(BasicExtension.extensionName, BasicExtension);
    }
    /**
     * @return {?}
     */
    load() {
        this.events.forEach((eventName) => {
            const /** @type {?} */ obs = fromEvent(this.viewer, eventName).map(args => this.castArgs(args));
            this.eventStreams.push(obs);
        });
        this.viewerEvents = merge(...this.eventStreams);
        if (BasicExtension.debugMessages)
            console.log(BasicExtension.extensionName, 'loaded!');
        if (BasicExtension.callback)
            BasicExtension.callback(this);
        return true;
    }
    /**
     * @return {?}
     */
    unload() {
        this.eventStreams = [];
        this.viewerEvents = undefined;
        if (BasicExtension.debugMessages)
            console.log(BasicExtension.extensionName, 'unloaded!');
        return true;
    }
}
BasicExtension.extensionName = 'BasicExtension';
BasicExtension.debugMessages = false;
BasicExtension.callback = null;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

class ScriptService {
    constructor() {
        // Nothing to do
        this.scripts = {};
    }
    /**
     * @param {...?} urls
     * @return {?}
     */
    load(...urls) {
        const /** @type {?} */ promises = [];
        urls.forEach((src) => {
            if (this.scripts[src] && this.scripts[src].loaded) {
                return;
            }
            this.scripts[src] = { src, loaded: false };
            return promises.push(this.loadScript(src));
        });
        return Promise.all(promises);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    loadScript(name) {
        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this.scripts[name] && this.scripts[name].loaded) {
                resolve({ src: name, loaded: true, status: 'Already Loaded' });
                return;
            }
            // load script
            const /** @type {?} */ script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.scripts[name].src;
            if (script.readyState) {
                // IE
                script.onreadystatechange = () => {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        this.scripts[name].loaded = true;
                        resolve({ src: name, loaded: true, status: 'Loaded' });
                    }
                };
            }
            else {
                // Others
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    resolve({ src: name, loaded: true, status: 'Loaded' });
                };
            }
            script.onerror = (error) => resolve({ src: name, loaded: false, status: 'Loaded' });
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
}
ScriptService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ScriptService.ctorParameters = () => [];

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

class ViewerComponent {
    /**
     * @param {?} script
     */
    constructor(script) {
        this.script = script;
        this.containerId = 'ng2-adsk-forge-viewer-container';
        this.onDocumentChanged = new EventEmitter();
        this.onItemLoaded = new EventEmitter();
        this.onError = new EventEmitter();
        // Viewer events
        this.onFitToView = new EventEmitter();
        this.onFullscreen = new EventEmitter();
        this.onGeometryLoaded = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onIsolate = new EventEmitter();
        this.onObjectTreeCreated = new EventEmitter();
        this.onObjectTreeUnavailable = new EventEmitter();
        this.onReset = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onShow = new EventEmitter();
        // Debugging
        this.showDebugMessages = false;
        this._viewerOptions = null;
        this.viewerInitialized = false;
        this.unsubscribe = new Subject();
    }
    /**
     * Helper to allow callers to specify documentId with or without the required urn: prefix
     * @param {?} documentId
     * @return {?}
     */
    static verifyUrn(documentId) {
        return (documentId.startsWith('urn:')) ? documentId : `urn:${documentId}`;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set viewerOptions(options) {
        if (!this.viewerInitialized && options) {
            this._viewerOptions = options;
            void this.initialiseApplication();
        }
    }
    /**
     * @return {?}
     */
    get viewerOptions() {
        return this._viewerOptions;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unregisterBasicExtension();
        if (this.viewerApp) {
            const /** @type {?} */ viewer = this.viewerApp.getCurrentViewer();
            if (viewer) {
                viewer.tearDown();
                viewer.uninitialize();
            }
        }
        this.viewerApp = null;
        this.viewerInitialized = false;
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    /**
     * Helper method to get some default viewer options
     * @param {?} onViewingApplicationInitialized
     * @param {?} getAccessToken
     * @return {?}
     */
    getDefaultViewerOptions(onViewingApplicationInitialized, getAccessToken) {
        return {
            initializerOptions: {
                env: 'AutodeskProduction',
                getAccessToken,
            },
            onViewingApplicationInitialized,
        };
    }
    /**
     * Get a reference to the current viewing application
     * @return {?}
     */
    get ViewerApplication() {
        return this.viewerApp;
    }
    /**
     * Get a reference to the current 3D viewer
     * @return {?}
     */
    get Viewer3D() {
        return this.viewerApp.getCurrentViewer();
    }
    /**
     * Get the document urn that has been loaded
     * @return {?}
     */
    get DocumentId() {
        return this.documentId;
    }
    /**
     * Set the document urn, which triggers the viewer to load the document
     * @param {?} value
     * @return {?}
     */
    set DocumentId(value) {
        this.documentId = value;
        this.loadDocument(this.documentId);
    }
    /**
     * @return {?}
     */
    get basicExtension() {
        return this.basicExt;
    }
    /**
     * @return {?}
     */
    get extensionEvents() {
        if (this.basicExt) {
            return this.basicExt.viewerEvents;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        this.viewerApp.selectItem(item, this.onItemLoadSuccess.bind(this), this.onItemLoadFail.bind(this));
    }
    /**
     * We don't bundle Autodesk's scripts with the component, and we don't really want users to have
     * to add the scripts to their index.html pages. So we'll load them when required.
     * @return {?}
     */
    loadScripts() {
        return this.script.load('https://developer.api.autodesk.com/modelderivative/v2/viewers/viewer3D.min.js?v=6.*.*')
            .then((data) => {
            this.log('script loaded ', data);
        })
            .catch(error => this.error(error));
    }
    /**
     * Initialises a ViewingApplication
     * @return {?}
     */
    initialiseApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            // Load scripts first
            yield this.loadScripts();
            if (this.viewerOptions.onViewerScriptsLoaded)
                this.viewerOptions.onViewerScriptsLoaded();
            // Check if the viewer has already been initialised - this isn't the nicest, but we've set the env in our
            // options above so we at least know that it was us who did this!
            if (!Autodesk.Viewing.Private.env) {
                Autodesk.Viewing.Initializer(this.viewerOptions.initializerOptions, () => {
                    this.initialized();
                });
            }
            else {
                // We need to give an initialised viewing application a tick to allow the DOM element
                // to be established before we re-draw
                setTimeout(() => {
                    this.initialized();
                });
            }
        });
    }
    /**
     * @return {?}
     */
    initialized() {
        this.viewerApp = new Autodesk.Viewing.ViewingApplication(this.containerId, this.viewerOptions.viewerApplicationOptions);
        // Register an extension to help us raise events
        const /** @type {?} */ extName = this.registerBasicExtension();
        const /** @type {?} */ config = this.addBasicExtensionConfig(extName);
        // Register a viewer with the application (passign through any additional config)
        this.viewerApp.registerViewer(this.viewerApp.k3D, (this.viewerOptions.headlessViewer) ? Autodesk.Viewing.Viewer3D : Autodesk.Viewing.Private.GuiViewer3D, config);
        // Viewer is ready - scripts are loaded and we've create a new viewing application
        this.viewerInitialized = true;
        this.viewerOptions.onViewingApplicationInitialized({ viewingApplication: this.viewerApp, viewerComponent: this });
    }
    /**
     * Loads a model in to the viewer via it's urn
     * @param {?} documentId
     * @return {?}
     */
    loadDocument(documentId) {
        if (!documentId) {
            return;
        }
        // Add urn: to the beginning of document id if needed
        this.viewerApp.loadDocument(ViewerComponent.verifyUrn(documentId), this.onDocumentLoadSuccess.bind(this), this.onDocumentLoadFailure.bind(this));
    }
    /**
     * Document successfully loaded
     * @param {?} document
     * @return {?}
     */
    onDocumentLoadSuccess(document) {
        if (!this.viewerApp.bubble)
            return;
        // Emit an event so the caller can do something
        // TODO: config option to specify which viewable to display (how?)
        this.onDocumentChanged.emit({ document, viewingApplication: this.viewerApp, viewerComponent: this });
        if (this.viewerOptions.showFirstViewable === undefined || this.viewerOptions.showFirstViewable) {
            // This will be the default behaviour -- show the first viewable
            // We could still make use of Document.getSubItemsWithProperties()
            // However, when using a ViewingApplication, we have access to the **bubble** attribute,
            // which references the root node of a graph that wraps each object from the Manifest JSON.
            const /** @type {?} */ viewables = this.viewerApp.bubble.search(Autodesk.Viewing.BubbleNode.MODEL_NODE);
            if (viewables && viewables.length > 0) {
                this.viewerApp.selectItem(viewables[0].data, this.onItemLoadSuccess.bind(this), this.onItemLoadFail.bind(this));
            }
        }
    }
    /**
     * Failed to load document
     * @param {?} errorCode
     * @return {?}
     */
    onDocumentLoadFailure(errorCode) {
        this.error('onDocumentLoadFailure() - errorCode:' + errorCode);
        this.onError.emit(errorCode);
    }
    /**
     * View from the document was successfully loaded
     * @param {?} viewer
     * @param {?} item
     * @return {?}
     */
    onItemLoadSuccess(viewer, item) {
        this.log('onItemLoadSuccess()', viewer, item);
        this.onItemLoaded.emit({
            item,
            currentViewer: viewer,
            viewingApplication: this.viewerApp,
            viewerComponent: this,
        });
    }
    /**
     * Failed to load a view from the document
     * @param {?} errorCode
     * @return {?}
     */
    onItemLoadFail(errorCode) {
        this.error('onItemLoadFail() - errorCode:' + errorCode);
        this.onError.emit(errorCode);
    }
    /**
     * Register our BasicExtension with the Forge Viewer
     * @return {?}
     */
    registerBasicExtension() {
        BasicExtension.registerExtension(BasicExtension.extensionName, this.extensionLoaded.bind(this));
        return BasicExtension.extensionName;
    }
    /**
     * Subscript to BasicExtension events when the extension has been
     * succesfully loaded by the viewer.
     * @param {?} ext
     * @return {?}
     */
    extensionLoaded(ext) {
        this.basicExt = ext;
        ext.viewerEvents
            .takeUntil(this.unsubscribe)
            .subscribe((item) => {
            this.log(item);
            if (item instanceof FitToViewEventArgs) {
                this.onFitToView.emit(item);
            }
            else if (item instanceof FullscreenEventArgs) {
                this.onFullscreen.emit(item);
            }
            else if (item instanceof GeometryLoadedEventArgs) {
                this.onGeometryLoaded.emit(item);
            }
            else if (item instanceof HideEventArgs) {
                this.onHide.emit(item);
            }
            else if (item instanceof IsolateEventArgs) {
                this.onIsolate.emit(item);
            }
            else if (item instanceof ObjectTreeCreatedEventArgs) {
                this.onObjectTreeCreated.emit(item);
            }
            else if (item instanceof ObjectTreeUnavailableEventArgs) {
                this.onObjectTreeUnavailable.emit(item);
            }
            else if (item instanceof ResetEventArgs) {
                this.onReset.emit(item);
            }
            else if (item instanceof SelectionChangedEventArgs) {
                this.onSelectionChanged.emit(item);
            }
            else if (item instanceof ShowEventArgs) {
                this.onShow.emit(item);
            }
        });
    }
    /**
     * @return {?}
     */
    unregisterBasicExtension() {
        BasicExtension.unregisterExtension(BasicExtension.extensionName);
        this.basicExt = null;
    }
    /**
     * Add list of extensions to the viewer config that has been provided
     * The allows the user to register their own extensions.
     * @param {?} extName
     * @return {?}
     */
    addBasicExtensionConfig(extName) {
        const /** @type {?} */ config = Object.assign({}, this.viewerOptions.viewerConfig, { extensions: [] });
        // We will always load our basic extension with any others specified by the caller
        if (this.viewerOptions.viewerConfig && this.viewerOptions.viewerConfig.extensions) {
            config.extensions = [...this.viewerOptions.viewerConfig.extensions, extName];
        }
        else {
            config.extensions = [extName];
        }
        return config;
    }
    /**
     * @param {?=} message
     * @param {...?} optionalParams
     * @return {?}
     */
    log(message, ...optionalParams) {
        if (!this.showDebugMessages)
            return;
        console.log(message, optionalParams);
    }
    /**
     * @param {?=} message
     * @param {...?} optionalParams
     * @return {?}
     */
    error(message, ...optionalParams) {
        if (!this.showDebugMessages)
            return;
        console.error(message, optionalParams);
    }
}
ViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'adsk-forge-viewer',
                template: "<div id=\"ng2-adsk-forge-viewer-container\"></div> ",
                styles: ["@import url('https://developer.api.autodesk.com/modelderivative/v2/viewers/style.min.css?v=6.*.*'); "],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
ViewerComponent.ctorParameters = () => [
    { type: ScriptService, },
];
ViewerComponent.propDecorators = {
    "onDocumentChanged": [{ type: Output },],
    "onItemLoaded": [{ type: Output },],
    "onError": [{ type: Output },],
    "onFitToView": [{ type: Output },],
    "onFullscreen": [{ type: Output },],
    "onGeometryLoaded": [{ type: Output },],
    "onHide": [{ type: Output },],
    "onIsolate": [{ type: Output },],
    "onObjectTreeCreated": [{ type: Output },],
    "onObjectTreeUnavailable": [{ type: Output },],
    "onReset": [{ type: Output },],
    "onSelectionChanged": [{ type: Output },],
    "onShow": [{ type: Output },],
    "showDebugMessages": [{ type: Input },],
    "viewerOptions": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class ThumbnailComponent {
    /**
     * @param {?} http
     * @param {?} sanitizer
     */
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.thumbnailOptions) {
            this.setImageSrc(this.thumbnailOptions.defaultImageSrc);
            this.getThumbnail(this.thumbnailOptions.documentId);
        }
    }
    /**
     * @param {?} documentId
     * @return {?}
     */
    getThumbnail(documentId) {
        let /** @type {?} */ url = `https://developer.api.autodesk.com/modelderivative/v2/designdata/${documentId}/thumbnail`;
        let /** @type {?} */ opts = '';
        if (this.thumbnailOptions.width)
            opts += `width=${this.thumbnailOptions.width}&`;
        if (this.thumbnailOptions.height)
            opts += `height=${this.thumbnailOptions.height}&`;
        if (opts)
            url += `?${opts.slice(0, -1)}`;
        this.thumbnailOptions.getAccessToken(this.setAccessToken.bind(this));
        const /** @type {?} */ headers = {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'image/png',
        };
        this.http.get(url, { headers, responseType: 'arraybuffer' })
            .subscribe(data => (data) ? this.setImageSrc(`data:image/png;base64,${this.toBase64(data)}`)
            : this.setImageSrc(), error => this.setImageSrc());
    }
    /**
     * @param {?} accessToken
     * @param {?} expiryTime
     * @return {?}
     */
    setAccessToken(accessToken, expiryTime) {
        this.token = accessToken;
        this.expire = expiryTime;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    toBase64(data) {
        return btoa(String.fromCharCode(.../** @type {?} */ (new Uint8Array(data))));
    }
    /**
     * @param {?=} src
     * @return {?}
     */
    setImageSrc(src = '') {
        let /** @type {?} */ imageSrc = '';
        if (src) {
            imageSrc = src;
        }
        else {
            imageSrc = (this.thumbnailOptions && this.thumbnailOptions.defaultImageSrc) || '';
        }
        this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(imageSrc);
    }
}
ThumbnailComponent.decorators = [
    { type: Component, args: [{
                selector: 'adsk-forge-thumbnail',
                template: "<img [src]=\"imageSrc\" /> ",
            },] },
];
/** @nocollapse */
ThumbnailComponent.ctorParameters = () => [
    { type: HttpClient, },
    { type: DomSanitizer, },
];
ThumbnailComponent.propDecorators = {
    "thumbnailOptions": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ViewerModule {
}
ViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ViewerComponent, ThumbnailComponent],
                imports: [HttpClientModule],
                exports: [ViewerComponent, ThumbnailComponent],
                providers: [ScriptService],
            },] },
];
/** @nocollapse */
ViewerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { BasicExtension, ScriptService, ViewerModule, ViewerEventArgs, AggregationSelectionChangedEventArgs, AnimationReadyEventArgs, CameraChangedEventArgs, CutplanesChangedEventArgs, EscapeEventArgs, ExplodeChangedEventArgs, ExtensionLoadedUnloadedEventArgs, ExtensionLoadedEventArgs, ExtensionUnloadedEventArgs, FinalFrameRenderedChangedEventArgs, FitToViewEventArgs, FragmentsLoadedEventArgs, FullscreenEventArgs, GeometryLoadedEventArgs, HideEventArgs, HyperlinkEventArgs, IsolateEventArgs, LayerVisibilityEventArgs, LoadMissingGeometryEventArgs, ModelRootLoadedEventArgs, ModelUnloadedEventArgs, NavigationModeChangedEventArgs, ObjectTreeEventArgs, ObjectTreeCreatedEventArgs, ObjectTreeUnavailableEventArgs, PrefEventArgs, PrefChangedEventArgs, PrefResetEventArgs, ProgressUpdateEventArgs, RenderOptionChangedEventArgs, RenderPresentedEventArgs, ResetEventArgs, RestoreDefaultSettingsEventArgs, SelectionChangedEventArgs, ShowEventArgs, TexturesLoadedEventArgs, ToolChangedEventArgs, ViewerInitializedEventArgs, ViewerResizeEventArgs, ViewerStateRestoredEventArgs, ViewerUnInitializedEventArgs, Extension, ViewerComponent, ThumbnailComponent };
//# sourceMappingURL=ng2-adsk-forge-viewer.js.map
