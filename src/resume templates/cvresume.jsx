import { Link } from "react-router-dom";
import cvimage from "../images/basic-cv-template.png"
import cvimage2 from "../images/college-cv-template.png"
import cvimage3 from "../images/modern-cv-template.png"
import Footer from "../1stpage/footer";
function CV(){
  return (
    <div className="p-3">
    
      <h2 className="font-semibold text-3xl px-5 mt-3 ">CV Templates</h2>
      <p className="px-5 py-2">
      Our online CV Builder simplifies the writing process with suggested content based on your personal experience. Easily build a CV that paves the way to your dream job.
      </p>
  
        <div className="flex ml-3 p-3"><Link to ="#" className="flex">
      <img src={cvimage} alt="" className="hover:opacity-60 w-[32%] border border-black mx-2" />
      <img src={cvimage2} alt="" className="hover:opacity-60 w-[32%] border border-black mx-2" />
      <img src={cvimage3} alt="" className="hover:opacity-60 w-[32%] border border-black mx-2" /></Link>
      </div>

      <div className="flex justify-center items-center">
          <p className="text-2xl font-bold mt-4 underline">CV Resources</p>
        </div>
        <div className="flex flex-col px-5 ">
            <p className="font-bold text-2xl text-blue-600">What is a CV (Curriculum Vitae)?</p>
            <p className="px-12 my-2 w-[80%] ">CV (short for Curriculum Vitae) is the Latin word for “course of life.”</p>
            <p className="px-12 my-2 w-[70%]">In a nutshell, a CV is a summary of who you are as a professional, including your work history, education, and skills. Done right, a CV is supposed to “sell you” to potential employers and land you a job.</p>
            
        </div>

        <div className="flex flex-col px-5 mt-3 ">
            <p className="font-bold text-2xl text-blue-600">What to Include in a CV?</p>
            <ul className=" px-7 list-disc">
            <li className="px-5 my-2 w-[70%] ">Contact Information - This is where you include all your contact details, such as your phone number, email, name, title, and relevant social profiles (e.g. LinkedIn, Twitter, etc.).</li>
            <li className="px-5 my-2 w-[70%]">Resume Summary (or Resume Objective) - A three-four sentence summary of your experiences, key skills, and top achievements that is positioned at the top of your resume.</li>
            <li className="px-5 my-2 w-[70%]">Work Experience - All your relevant job positions, starting from your current or most recent job and going backward in time from there. The work experience section is also where you list your achievements and/or responsibilities for each role.</li>
            <li className="px-5 my-2 w-[70%]">Skills - A list of any hard and soft skills you possess that are relevant to the job you’re applying for</li>
            <li className="px-5 my-2 w-[70%]">Education - This section should mirror your education history. If you’re not a recent graduate with little-to-no work experience, you should keep it short by only including your highest and most recent degree.</li>
            <li className="px-5 my-2 w-[70%]">Optional section - Anything else that may improve your chances of getting hired, such as your awards, certificates, personal projects, internships, foreign languages you speak, etc.</li>
            </ul>
        </div>

        <div className="flex flex-col px-5 mt-3 ">
            <p className="font-bold text-2xl text-blue-600">How Long Should a CV Be?</p>
            <p className="px-12 my-2 w-[80%] ">That said, we always recommend keeping your CV short and to the point (i.e. one page long). The more concise you make your CV, the more likely it is for the hiring manager to read it from start to finish.</p>
            <p className="px-12 my-2 w-[70%]">If you’re based in the US, though, and you’re applying for a job or admission in academia, your CV can be as long as it needs to reflect your lengthy academic career (i.e. eight pages or more).</p>
            
        </div>

        <div className="flex flex-col px-5 mt-3 ">
            <p className="font-bold text-2xl text-blue-600">How to Make a CV With No Experience?</p>
            <p className="px-12 my-2 w-[80%] ">If you’re a recent college graduate applying for an entry-level position, you likely have little-to-no work experience to add to your CV - and that’s totally OK. The hiring manager won’t expect you to have much work experience anyway.</p>
            <p className="px-12 my-2 w-[70%]">There are other things you can add to your CV to stand out from other applicants, such as:</p>
            <ul className="px-7 list-disc">
              <li className="px-5 my-2 w-[70%]">Academic achievements</li>
              <li className="px-5 my-2 w-[70%]">Completed internships</li>
              <li className="px-5 my-2 w-[70%]">Volunteering experience</li>
              <li className="px-5 my-2 w-[70%]">Personal projects</li>
              <li className="px-5 my-2 w-[70%]">Hobbies and interests</li>
            </ul>
        </div>

        <div className="flex flex-col px-5 mt-3 mb-2 ">
            <p className="font-bold text-2xl text-blue-600">What’s the Difference Between a CV and a Resume?</p>
            <p className="px-12 my-2 w-[70%] ">Technically speaking, a CV and a resume are the same exact document, the only difference being that Americans call it a “resume,” whereas Europeans (and most other countries) call it a CV.</p>
            <p className="px-12 my-2 w-[80%] ">A European CV can be between one and three pages long, depending on your career level and work experience.</p>
            <p className="px-12 my-2 w-[70%]">A US resume, on the other hand, should (optimally) not be longer than one page (or two pages maximum, if you’re a seasoned professional with a lot of work experience to show for it).</p>
        </div>

      <Footer />
    </div>
  );
}
export default CV;
