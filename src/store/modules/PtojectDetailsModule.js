export default {
  state: {
    projectInfo: [
      {
        heading: "Minimal Look Bedrooms",
        firstparagraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
        secondparagraph:
          "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      },
    ],
    slides: [
      { slideIndex: 1, image: require("@/assets/img/project_details_slider1.png"), alt: 'slider pic', display: true },
      { slideIndex: 2, image: require("@/assets/img/project_details_slider2.png"), alt: 'slider pic', display: false },
      { slideIndex: 3, image: require("@/assets/img/project_details_slider3.png"), alt: 'slider pic', display: false },
    ],    
  },
  getters: {
    getProjectInfo(state) {
      return state.projectInfo;
    },
    getProjectSlides(state) {
      return state.slides;
    },
  },
};
