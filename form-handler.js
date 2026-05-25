// NOTE: Utilizing native Netlify Forms processing via serverless background asynchronous fetching.
// Since data routing is managed server-side by the hosting provider, no API keys or 
// third-party submission credentials are exposed in the client-side source code.
document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    const modal = document.getElementById("successModal");

    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            // Prevent the default browser/Netlify redirect
            e.preventDefault();

            // Prepare the data
            const formData = new FormData(form);
            
            // Send the data to Netlify
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Show your custom modal
                if (modal) modal.style.display = "flex";
                form.reset();
            })
            .catch(error => console.error("Form error:", error));
        });
    });
});

function closeModal() {
    const modal = document.getElementById("successModal");
    if (modal) modal.style.display = "none";
}

// index.html one js 

const videos = document.querySelectorAll(".gym-video");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.play();
}
});
});

videos.forEach(v=>{
observer.observe(v);
});

document.querySelectorAll(".mute-btn").forEach((btn,i)=>{

btn.addEventListener("click",()=>{

const video = videos[i];

if(video.muted){
video.muted=false;
btn.innerHTML='<i class="fas fa-volume-up"></i>';
}else{
video.muted=true;
btn.innerHTML='<i class="fas fa-volume-mute"></i>';
}

});

});

document.addEventListener("contextmenu",e=>{
if(e.target.tagName==="VIDEO"){
e.preventDefault();
}
});
