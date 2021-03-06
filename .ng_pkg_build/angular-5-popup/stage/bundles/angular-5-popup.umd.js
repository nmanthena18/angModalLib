(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('angular-5-popup', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['angular-5-popup'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        var modalToRemove = this.modals.indexOf(id);
        this.modals = this.modals.splice(modalToRemove, 1);
    };
    ModalService.prototype.open = function (id) {
        var modal;
        this.modals.forEach(function (item) {
            if (item.id == id)
                modal = item;
        });
        modal.ele.nativeElement.style.visibility = 'visible';
        var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;
        var modalContainer = modal.ele.nativeElement.getElementsByClassName('modal')[0];
        var modalHeight = y - modalContainer.clientHeight;
        modalContainer.style.top = modalHeight / 2 + 'px';
        this.addRemoveCls(modalContainer, 'modal-open', 'modal-close');
    };
    ModalService.prototype.close = function (id) {
        var modal;
        this.modals.forEach(function (item) {
            if (item.id == id)
                modal = item;
        });
        var modalContainer = modal.ele.nativeElement.getElementsByClassName('modal')[0];
        this.addRemoveCls(modalContainer, 'modal-close', 'modal-open');
        setTimeout(function () {
            modal.ele.nativeElement.style.visibility = 'hidden';
        }, 200);
    };
    ModalService.prototype.addRemoveCls = function (modal, add, remove) {
        var classes = modal.getAttribute('class').split(" ");
        var isOpen = classes.indexOf(add);
        isOpen < 0 ? classes.push(add) : '';
        var index = classes.indexOf(remove);
        index > -1 ? classes.splice(index, 1) : '';
        console.log(classes);
        modal.className = classes.join().replace(',', ' ');
    };
    return ModalService;
}());
ModalService.decorators = [
    { type: core.Injectable },
];
ModalService.ctorParameters = function () { return []; };
var ModalComponent = /** @class */ (function () {
    function ModalComponent(ms, ele) {
        this.ms = ms;
        this.ele = ele;
        this.element = ele.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        this.element.querySelector('body');
        this.element.addEventListener('click', function (e) {
            var target = e.target;
            if (target.className == 'modal-background') {
                this.ms.close(this.id);
            }
        }.bind(this));
        this.ms.add(this);
    };
    ModalComponent.prototype.openModal = function (id) {
        this.ms.open(id);
    };
    ModalComponent.prototype.closeModal = function (id) {
        this.ms.close(id);
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.ms.remove(this.id);
        this.element.remove();
    };
    return ModalComponent;
}());
ModalComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sc-modal',
                moduleId: module.id.toString(),
                template: '<ng-content></ng-content>',
                styles: ["sc-modal{text-align:center;position:relative;top:0;left:0;width:100%;height:100%}sc-modal.default{visibility:hidden}sc-modal .modal{z-index:1000;overflow:auto;background-color:#fff;height:350px;width:500px;margin:0 auto;position:fixed;left:0;right:0;border-radius:3px;border:1px solid #ccc}sc-modal .modal-header{padding:20px;background:#fff;position:relative}sc-modal .modal-background{position:fixed;background-color:#000;opacity:.3;z-index:900;width:100%;height:100%;left:0;top:0}sc-modal body.modal-open{overflow:hidden}.sc-modal-close{padding:0;background:0 0;border:0;cursor:pointer;position:absolute;right:10px;top:10px}.modal.modal-open{-webkit-animation:.7s cubic-bezier(.47,0,.745,.715) both puff-in-center;animation:.7s cubic-bezier(.47,0,.745,.715) both puff-in-center}@-webkit-keyframes puff-in-center{0%{-webkit-transform:scale(2);transform:scale(2);-webkit-filter:blur(2px);filter:blur(2px);opacity:0}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes puff-in-center{0%{-webkit-transform:scale(2);transform:scale(2);-webkit-filter:blur(2px);filter:blur(2px);opacity:0}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-filter:blur(0);filter:blur(0);opacity:1}}.modal.modal-close{-webkit-animation:1s ease-out both fade-out;animation:1s ease-out both fade-out}@-webkit-keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}"],
                encapsulation: core.ViewEncapsulation.None,
            },] },
];
ModalComponent.ctorParameters = function () { return [
    { type: ModalService, },
    { type: core.ElementRef, },
]; };
ModalComponent.propDecorators = {
    "id": [{ type: core.Input },],
};
var ScModalModule = /** @class */ (function () {
    function ScModalModule() {
    }
    return ScModalModule;
}());
ScModalModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [ModalComponent],
                entryComponents: [],
                exports: [ModalComponent],
                providers: [ModalService],
                bootstrap: [ModalComponent]
            },] },
];
ScModalModule.ctorParameters = function () { return []; };

exports.ScModalModule = ScModalModule;
exports.ModalService = ModalService;
exports.ModalComponent = ModalComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-5-popup.umd.js.map
