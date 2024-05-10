
const depts = {
    "Cardiology" : "In the realm of cardiology, the beating heart of medical science, every rhythm tells a story of life. Cardiology is the symphony of the cardiovascular system, orchestrating the intricate dance between heart, blood vessels, and blood. From the steady lub-dub of a healthy heart to the irregular cadence of arrhythmias, each beat holds vital clues to a patient's health.       Cardiology encompasses a vast spectrum of conditions, from the common to the rare, each demanding its own specialized expertise. It's a field where innovation is constant, where groundbreaking technologies like stents, pacemakers, and minimally invasive procedures continually redefine what's possible.",
    "Radiology" : "Radiology is a branch of medicine that deals with imaging technologies to diagnose and treat diseases within the body. It encompasses various imaging techniques such as X-rays, computed tomography (CT), magnetic resonance imaging (MRI), ultrasound, and nuclear medicine. Radiologists are medical doctors who specialize in interpreting medical images to diagnose and treat diseases. They play a crucial role in healthcare by providing insights into various conditions, guiding treatment plans, and monitoring patient progress. Advances in radiology technology have greatly improved diagnostic accuracy and patient care over the years.",
    "Urology" : "Urology is a medical specialty focused on the diagnosis and treatment of disorders of the male and female urinary tract system and the male reproductive organs. Urologists are physicians who are trained to diagnose and treat conditions affecting the kidneys, ureters, bladder, urethra, and the male reproductive organs, including the prostate, testes, and penis.Some common conditions that urologists diagnose and treat include urinary tract infections (UTIs), kidney stones, urinary incontinence, benign prostatic hyperplasia (enlarged prostate), prostate cancer, erectile dysfunction, infertility, and various forms of urologic cancers such as bladder cancer and kidney cancer.",
    "OPD" : "OPD typically stands for Outpatient Department. It refers to the section of a hospital or medical facility where patients receive consultations, diagnoses, and treatments without being admitted for an overnight stay. In the OPD, patients can visit specialists or general practitioners for routine check-ups, screenings, minor procedures, or follow-up appointments. OPD services are essential for managing non-emergency medical conditions, providing preventive care, and monitoring ongoing treatments. It helps to reduce the burden on inpatient services by catering to patients who do not require hospitalization.",
    "Neurology" : "Neurology is a branch of medicine that deals with disorders of the nervous system, which includes the brain, spinal cord, nerves, and muscles. Neurologists are medical doctors who specialize in diagnosing, treating, and managing a wide range of neurological conditions.Neurologists use a variety of diagnostic tools and techniques, including neurological examinations, imaging studies (such as MRI and CT scans), electroencephalography (EEG), electromyography (EMG), and nerve conduction studies, to evaluate and diagnose neurological conditions.",
    "Pathology" : "Pathology is the branch of medicine that deals with the study of diseases, their causes, mechanisms, and effects on the structure and function of the body. Pathologists are medical doctors who specialize in diagnosing diseases by examining tissues, cells, bodily fluids, and organs. Pathologists play a crucial role in patient care by providing accurate diagnoses that guide treatment decisions and help improve patient outcomes. They also contribute to medical research by studying disease processes and developing new diagnostic tests and treatments. Advances in technology, such as molecular diagnostics and digital pathology, continue to enhance the practice of pathology and its role in modern healthcare.",
};
const images = {
    "Cardiology" : "Images/cardiology.webp",
    "Radiology" : "Images/radiology.webp",
    "Neurology" : "Images/neurology.webp",
    "Pathology" : "Images/pathology.webp",
    "OPD" : "Images/OPD.webp",
    "Urology" : "Images/Urology.webp"
};
const keys = Object.keys(depts);
let deptBtn = document.querySelectorAll(".btn");
deptBtn.forEach(function(btn, index){
    btn.addEventListener('click',function(){
        let textArea = document.querySelector('.text-det');
        let heading = textArea.querySelector('h1');
        let para = textArea.querySelector('p');

        heading.innerText = keys[index];
        para.innerText = depts[heading.innerText];

        let imgDiv = document.querySelector('.details');
        let img = imgDiv.querySelector('img');
        img.src = images[heading.innerText];
    })
})
// for menubar in phone screen
let i = 0;
let menuitem = document.querySelector(".menuitem");
menuitem.addEventListener('click', function(){
    let list = document.querySelector('.navbar').lastElementChild;
    if(i == 0){
        list.style.left = '0px';
        list.style.zIndex = '1';
        i = 1;
    } else {
        list.style.left = '-100%';
        i = 0;
    }
})

// testimonial section
var btn = document.querySelectorAll('.btn1');
var slide = document.querySelector('#slide');

btn[0].addEventListener('click',function(){
    slide.style.transform = "translateX(0px)";
    for(i = 0; i < 4; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
});
btn[1].addEventListener('click',function(){
    slide.style.transform = "translateX(-800px)";
    for(i = 0; i < 4; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
});
btn[2].addEventListener('click',function(){
    slide.style.transform = "translateX(-1600px)";
    for(i = 0; i < 4; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
});
btn[3].addEventListener('click',function(){
    slide.style.transform = "translateX(-2400px)";
    for(i = 0; i < 4; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
});

// contact section
document.getElementById('submitbtn').addEventListener('click', function(event){
    event.preventDefault();
    let fname = document.getElementById('firstname').value;
    let lname = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    let dept = document.getElementById('dept').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('subtext').value;
    console.log(`Your name : ${fname + " " + lname}`);
    console.log(`Your age : ${age}`);
    console.log(`Your department : ${dept}`);
    console.log(`Your email Address : ${email}`);
    console.log(`Body : ${msg}`);
});