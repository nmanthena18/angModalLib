/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ModalService {
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
function ModalService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ModalService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ModalService.ctorParameters;
    /** @type {?} */
    ModalService.prototype.modals;
}
//# sourceMappingURL=modal.service.js.map