import { Injectable, Component, Input, ElementRef, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalService {
    constructor() {
        this.modals = [];
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        // remove modal from array of active modals
        let /** @type {?} */ modalToRemove = this.modals.indexOf(id);
        this.modals = this.modals.splice(modalToRemove, 1);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    open(id) {
        var /** @type {?} */ modal;
        this.modals.forEach((item) => {
            if (item.id == id)
                modal = item;
        });
        modal.ele.nativeElement.style.visibility = 'visible';
        var /** @type {?} */ w = window, /** @type {?} */
        d = document, /** @type {?} */
        e = d.documentElement, /** @type {?} */
        g = d.getElementsByTagName('body')[0], /** @type {?} */
        x = w.innerWidth || e.clientWidth || g.clientWidth, /** @type {?} */
        y = w.innerHeight || e.clientHeight || g.clientHeight;
        let /** @type {?} */ modalContainer = modal.ele.nativeElement.getElementsByClassName('modal')[0];
        let /** @type {?} */ modalHeight = y - modalContainer.clientHeight;
        modalContainer.style.top = modalHeight / 2 + 'px';
        this.addRemoveCls(modalContainer, 'modal-open', 'modal-close');
    }
    /**
     * @param {?} id
     * @return {?}
     */
    close(id) {
        var /** @type {?} */ modal;
        this.modals.forEach((item) => {
            if (item.id == id)
                modal = item;
        });
        let /** @type {?} */ modalContainer = modal.ele.nativeElement.getElementsByClassName('modal')[0];
        this.addRemoveCls(modalContainer, 'modal-close', 'modal-open');
        setTimeout(() => {
            modal.ele.nativeElement.style.visibility = 'hidden';
        }, 200);
    }
    /**
     * @param {?} modal
     * @param {?} add
     * @param {?} remove
     * @return {?}
     */
    addRemoveCls(modal, add, remove) {
        var /** @type {?} */ classes = modal.getAttribute('class').split(" ");
        let /** @type {?} */ isOpen = classes.indexOf(add);
        isOpen < 0 ? classes.push(add) : '';
        let /** @type {?} */ index = classes.indexOf(remove);
        index > -1 ? classes.splice(index, 1) : '';
        console.log(classes);
        modal.className = classes.join().replace(',', ' ');
    }
}
ModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ModalService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalComponent {
    /**
     * @param {?} ms
     * @param {?} ele
     */
    constructor(ms, ele) {
        this.ms = ms;
        this.ele = ele;
        this.element = ele.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.querySelector('body');
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            var /** @type {?} */ target = e.target;
            if (target.className == 'modal-background') {
                this.ms.close(this.id);
            }
        }.bind(this));
        this.ms.add(this);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openModal(id) {
        this.ms.open(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    closeModal(id) {
        this.ms.close(id);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.ms.remove(this.id);
        this.element.remove();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-modal',
                moduleId: module.id.toString(),
                template: '<ng-content></ng-content>',
                styles: [`sc-modal{text-align:center;position:relative;top:0;left:0;width:100%;height:100%}sc-modal.default{visibility:hidden}sc-modal .modal{z-index:1000;overflow:auto;background-color:#fff;height:350px;width:500px;margin:0 auto;position:fixed;left:0;right:0;border-radius:3px;border:1px solid #ccc}sc-modal .modal-header{padding:20px;background:#fff;position:relative}sc-modal .modal-background{position:fixed;background-color:#000;opacity:.3;z-index:900;width:100%;height:100%;left:0;top:0}sc-modal body.modal-open{overflow:hidden}.sc-modal-close{padding:0;background:0 0;border:0;cursor:pointer;position:absolute;right:10px;top:10px}.modal.modal-open{-webkit-animation:.7s cubic-bezier(.47,0,.745,.715) both puff-in-center;animation:.7s cubic-bezier(.47,0,.745,.715) both puff-in-center}@-webkit-keyframes puff-in-center{0%{-webkit-transform:scale(2);transform:scale(2);-webkit-filter:blur(2px);filter:blur(2px);opacity:0}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes puff-in-center{0%{-webkit-transform:scale(2);transform:scale(2);-webkit-filter:blur(2px);filter:blur(2px);opacity:0}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-filter:blur(0);filter:blur(0);opacity:1}}.modal.modal-close{-webkit-animation:1s ease-out both fade-out;animation:1s ease-out both fade-out}@-webkit-keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}`],
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: ModalService, },
    { type: ElementRef, },
];
ModalComponent.propDecorators = {
    "id": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ScModalModule {
}
ScModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ModalComponent],
                entryComponents: [],
                exports: [ModalComponent],
                providers: [ModalService],
                bootstrap: [ModalComponent]
            },] },
];
/** @nocollapse */
ScModalModule.ctorParameters = () => [];

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

export { ScModalModule, ModalService, ModalComponent };
//# sourceMappingURL=angular-5-popup.js.map
