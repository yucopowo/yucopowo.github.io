define(function (emitter, _, $) {
   const container = document.getElementById('scroll-container');

   const scrollingFromMessage = new Map();

   function isScrollingFromMessage() {
      return !(scrollingFromMessage.size === 0);
   }
   function onScrollFromUser() {
      if(isScrollingFromMessage()) return;

      const { id, offset } = getFirstNodePositionInView(container);

      window.parent.postMessage(JSON.stringify({
         to: 'previewer',
         type: 'scrollTo',
         data: {
            id,
            offset
         }
      }));
   }

   function onScrollFromMessage(data) {
      const uuid = UUID();
      scrollingFromMessage.set(uuid, true);

      const { id, offset } = data;
      const target = document.getElementById(id);

      // console.log(target);
      $(container).stop(true, false).scrollTo(target, {
         axis: 'y',
         easing: 'easeOutQuart',
         interrupt: true,
         duration: 50,
         over: {
            top: offset
         },
         onAfter() {
            scrollingFromMessage.delete(uuid);
         },
         fail() {
            scrollingFromMessage.delete(uuid);
         }
      });

   }

   // const throttledScrollFromMessage = _.debounce(onScrollFromMessage, 50, {
   //    maxWait: 500
   // });
   emitter.on('scrollTo', (data) => {
      // throttledScrollFromMessage(data.data);
      onScrollFromMessage(data.data);
   });


   // const throttledScrollFromUser = _.debounce(onScrollFromUser, 50, {
   //    maxWait: 500
   // });
   // container.addEventListener('scroll', throttledScrollFromUser, false);
   container.addEventListener('scroll', () => {
      onScrollFromUser();
   }, false);
});
