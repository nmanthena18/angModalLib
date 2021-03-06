import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
export declare class ModalComponent implements OnInit, OnDestroy {
    private ms;
    private ele;
    id: string;
    private element;
    constructor(ms: ModalService, ele: ElementRef);
    ngOnInit(): void;
    openModal(id: string): void;
    closeModal(id: string): void;
    ngOnDestroy(): void;
}
