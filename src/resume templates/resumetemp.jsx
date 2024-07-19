
import Home from "../Components/SelectTemplate section/Home"
import Footer from "../1stpage/footer";
function resume() {
  return (
    
    <div className="p-3 ">

      <h2 className="font-semibold text-3xl px-5 mt-3 ">Resume Templates</h2>
      <p className="px-5 py-2">
        Pick your favorite free resume template. Download, fill it in and start
        applying for jobs. You’ll have a professional resume in a matter of
        minutes!
      </p>
      <Home/>
    
       
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold mt-4 underline">Resume Resources</p>
        </div>
        <div className="flex flex-col px-5 ">
            <p className="font-bold text-2xl text-blue-600">What is a Resume ?</p>
            <p className="px-12 my-2 w-[80%] ">A resume is a brief summary of personal and professional experiences, skills, and education history. Its main purpose is to show off your best self to potential employers.</p>
            <p className="px-12 my-2 w-[70%]">When applying for a job, you’re (in most cases) going to be asked for a resume accompanied by a cover letter.</p>
            <p className="px-12 my-2 w-[70%]">If you manage to create a “good” resume, you’re going to 2x your chances of getting hired.</p>
        </div>

        <div className="flex flex-col px-5 mt-3 ">
            <p className="font-bold text-2xl text-blue-600">How to Write a Resume With No Experience?</p>
            <p className="px-12 my-2 w-[80%] ">The process of writing a resume might seem super scary to you. After all, most resume examples you see on the web are 80% about work experience. So, what the heck can you include in your resume if you have none?</p>
            <p className="px-12 my-2 w-[70%]">Well, here’s some good news. If you’re applying for an entry-level job or an internship, no one expects you to have ANY work experience.</p>
            <p className="px-12 my-2 w-[70%]">Instead, you should focus on what you DO have: education, projects, volunteering experience, hobbies & interests.</p>
        </div>

        <div className="flex flex-col px-5 mt-3 ">
            <p className="font-bold text-2xl text-blue-600">What to Put on a Resume?</p>
            <div className="flex justify-evenly items-center">
              <div className="flex flex-col  items-center">
              <p className="px-12 my-2  ">The most common sections on a resume are:</p>
              <ul className="px-7 list-disc">
                <li className="px-5 my-2 ">Contact information</li>
                <li className="px-5 my-2 ">Resume summary or objective</li>
                <li className="px-5 my-2 ">Work experience</li>
                <li className="px-5 my-2 ">Education</li>
              </ul>
              </div>
              <div className="flex flex-col ">
                
              <p className=" my-2  ">If you want to personalize your resume a bit more, you can also include the following sections:</p>
                <ul className="px-7 list-disc">
                <li className="px-5 my-2 ">Projects</li>
                <li className="px-5 my-2 ">Volunteering experience</li>
                <li className="px-5 my-2">Hobbies & interests</li>
                <li className="px-5 my-2 ">Portfolio</li>
              </ul>
              </div>
            </div>
        </div>

        <div className="flex flex-col px-5 mt-3 ">
            <p className="font-bold text-2xl text-blue-600">How to Write a Resume For a Student?</p>
            <p className="px-12 my-2 w-[80%] ">A good student resume takes advantage of the education section to highlight the candidate’s skills and qualifications.</p>
            <p className="px-12 my-2 w-[70%]">So, the first thing you should do is talk about all your academic achievements, including any classes you’ve taken that are relevant to the position.</p>
            <p className="px-12 my-2 w-[70%]">As a student, hiring managers don’t expect you to have extensive professional experience, so you don’t have to worry about the work experience section missing from your resume. Instead, you can focus on highlighting your extracurricular activities, any volunteering you’ve done, and your awards or certifications.</p>
        </div>

        <div className="flex flex-col px-5 mt-3 ">
            <p className="font-bold text-2xl text-blue-600">How Long Should a Resume Be?</p>
            <p className="px-12 my-2 w-[80%] ">Short answer: one page. If you're a seasoned professional with a lot of work experience that's relevant to the position, you can create a 2-page long resume MAX.</p>
            <p className="px-12 my-2 w-[70%]">Long answer: If you have 10+ years experience, Up to two pages maximum. These was very relevant and useful information has to be included in the extra space. One page is the standard</p>
        </div>

        <div className="flex flex-col px-5 mt-3 mb-2 ">
            <p className="font-bold text-2xl text-blue-600">What’s the Difference Between a Resume and a CV?</p>
            <p className="px-12 my-2 w-[80%] ">In most cases, when people are talking about a CV or a resume, they are referring to the same thing! The only difference is that it's called a resume in the US and a CV in Europe (and most other countries around the world).</p>
            <p className="px-12 my-2 w-[70%]">Now, in the US, a CV is a very in-depth document that describes your career journey step-by-step, including all sorts of personal information. Depending on your amount of experience, a CV can range between 2 to 8 pages and it’s typically used when you’re applying for jobs in academia.</p>
        </div>
      <Footer />
    </div>
    
  );
}
export default resume;
