// function playVideo(a,b){
//     console.log(this);
// }
// playVideo();
// playVideo.call({name:'shiva kumar'},1,2);
// playVideo.apply({name:'shiva kumar'},[1,2]);
// playVideo.bind({name:'shiva kumar'})();

const video={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach((tag=>console.log(this.title,tag)))
    }
};
video.showTags();