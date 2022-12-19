import EventEmitter from 'events';

export default class Widget extends EventEmitter {
    click(callback) {
        this.addListener('click', () => {
            if(callback) {
                callback();
            }
        });
    }
}
