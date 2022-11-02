define(function (emitter, _, $) {
    const container = document.getElementById('scroll-container');



    // let scrollingFromMessage = false;
    // let scrollFrom = 'user';
    const scrollingFromMessage = new Map();

    function isScrollingFromMessage() {
        return !(scrollingFromMessage.size === 0);
    }
    // const scrollingFromMessageContainer = document.getElementById('scrollingFromMessage');
    // setInterval(() => {
    //     // console.log('scrollingFromMessage', scrollingFromMessage);
    //     scrollingFromMessageContainer.innerHTML = isScrollingFromMessage();
    // }, 100);
    function onScrollFromUser() {
        // console.log('onScrollFromUser');
        // console.log('scrollingFromMessage', scrollingFromMessage);
        if(isScrollingFromMessage()) return;

        const { id, offset } = getFirstNodePositionInView(container);

        window.parent.postMessage(JSON.stringify({
            to: 'editor',
            type: 'scrollTo',
            data: {
                id,
                offset
            }
        }));
    }

    function onScrollFromMessage(data) {
        // console.log('onScrollFromMessage', data);

        // scrollingFromMessage = true;

        const uuid = UUID();
        scrollingFromMessage.set(uuid, true);

        const { id, offset } = data;
        const target = document.getElementById(id);

        // console.log(target);
        $(container).stop(true, false).scrollTo(target, {
            axis: 'y',
            easing: 'easeOutExpo',
            interrupt: true,
            duration: 50,
            over: {
                top: offset
            },
            onAfter() {
                // console.log(scrollingFromMessage);
                // scrollingFromMessage = false;
                // console.log('scrollingFromMessage', scrollingFromMessage);
                scrollingFromMessage.delete(uuid);
            },
            fail() {
                // scrollingFromMessage = false;
                scrollingFromMessage.delete(uuid);
            }
        });

    }

    // const throttledScrollFromMessage = _.debounce(onScrollFromMessage, 50, {
    //     maxWait: 500
    // });
    emitter.on('scrollTo', (data) => {
        // throttledScrollFromMessage(data.data);
        onScrollFromMessage(data.data);
    });


    // const throttledScrollFromUser = _.debounce(onScrollFromUser, 50, {
    //     maxWait: 500
    // });
    // container.addEventListener('scroll', throttledScrollFromUser, false);
    container.addEventListener('scroll', () => {
        onScrollFromUser();
    }, false);
});
