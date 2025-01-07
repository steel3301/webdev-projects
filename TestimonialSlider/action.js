const testimonial = [
    {
        name: "Amanda Thompson",
        photourl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text : "Suri's exquisite range of dildos truly deliver the ultimate pleasure experience. As a connoisseur of adult toys, I can confidently say they offer the best dildos for a pleasurable orgasm. The quality and design surpass any other brand I've tried. Thank you, Suri, for revolutionizing my intimate moments"
    },
    {
        name: "Mia Khalifa",
        photourl: "https://images.unsplash.com/photo-1521310192545-4ac7951413f0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text : "Suri's exquisite range of dildos truly deliver the ultimate pleasure experience. As a connoisseur of adult toys, I can confidently say they offer the best dildos for a pleasurable orgasm. The quality and design surpass any other brand I've tried. Thank you, Suri, for revolutionizing my intimate moments"
    },
    {
        name: "Venessa Vega",
        photourl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text : "Suri's exquisite range of dildos truly deliver the ultimate pleasure experience. As a connoisseur of adult toys, I can confidently say they offer the best dildos for a pleasurable orgasm. The quality and design surpass any other brand I've tried. Thank you, Suri, for revolutionizing my intimate moments"
    }
];

const imgElement = document.querySelector("img");
const textElement = document.querySelector(".text");
const usernameElement = document.querySelector(".username");


let idx = 0;

updateTestimonial();
function updateTestimonial() {
    const {name, photourl, text} = testimonial[idx]

    imgElement.src = photourl;
    textElement.innerHTML = text;
    usernameElement.innerHTML = name;

    idx++;

    if(idx === testimonial.length) {
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonial();
    }, 3000);

}