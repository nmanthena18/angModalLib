export declare class ModalService {
    private modals;
    constructor();
    add(modal: any): void;
    remove(id: string): void;
    open(id: string): void;
    close(id: string): void;
    private addRemoveCls(modal, add, remove);
}
