import Header from "../components/Header";
import Footer from "../components/Footer";
import cheveron from '../assets/cheveron-down.svg';

export default function Faq()  {
  
    return (
        <>
            <Header />
            <div className='bg-white'>
            <div  className='w-[1512px] h-[340px] bg-primary500'>
                <div className=' text-white text-justify '>
                <h2 className='absolute font-DMSerif text-[46px] top-[150px] left-[160px]'>Frequently Asked Questions</h2>
                <h6 className='absolute font-Jost text-[20px] top-[250px] left-[160px]'>Find quick help and support for common inquiries about our website</h6>
                </div>
            </div>
            <div className='ml-40 flex flex-col gap-[60px] mt-[70px]'>
            <div className='flex flex-col gap-[18px]'>
                <h1 className='font-medium text-4xl font-DmSerif'>FAQs</h1>
                <h5>Find answers to commonly asked questions about our website.</h5>
               
            </div>
            <div className='flex flex-col gap-[18px]'>
                <h1 className='font-medium font-DmSerif'>How do I track my period?</h1>
               
                <h5 className='font-Jost'>To track your period, simply log in to your account and go to the Period Tracking section. You can enter the start and end dates of your period, as well as any symptoms or notes 
                    <br />you want to keep track of.</h5>
            </div>
            
            <div className='flex flex-col gap-[18px]'>
                <h1 className='font-medium font-DmSerif'>How can I manage my account?</h1>
                <h5 className='font-Jost'>To manage your account, click on your profile icon and select Account Settings. From there, you can update your personal information, change your password, and manage your 
                    <br />notification preferences..</h5>
            </div>
            <div className='flex flex-col gap-[18px]'>
                <h1 className='font-medium font-DmSerif'>Where can I find health resources?</h1>
                <h5 className='font-Jost'>Our webapp provides a range of health resources in the Health Blog section. You can find articles on topics such as puberty, menstrual health, and other related issues. Simply click on the 
                    <br />Health Resources tab to access the blog..</h5>
            </div>
            <div className='flex flex-col gap-[18px]'>
                <h1 className='font-medium font-DmSerif'>Is my privacy protected?</h1>
                <h5 className='font-Jost'>We take your privacy seriously. All your personal information is securely stored and will not be shared with third parties. For more details, please refer to our Privacy Policy..</h5>
            </div>
            <div className='flex flex-col gap-[18px] mb-20'>
                <h1 className='font-medium font-DmSerif'>How do I contact support?</h1>
                <h5 className='font-Jost'>If you have any further questions or need assistance, please reach out to our support team. You can contact us through the provided form or email us directly at support@example.com.</h5>
            </div>
            </div>
            <div>
           <h3 className='font-DMSerif text-xl font-bold ml-[157px]'> Find answers to common questions about the sign-up and log-in process.</h3>
            <div className='flex flex-col gap-4 ml-[148px] mt-10 mb-10'>
                <div className='w-[1250px] h-auto overflow-hidden
                 border-b-2 border-black p-4 relative'>What is Period Slay?
                 <div> <img src={cheveron} alt="" srcset="" className= 'absolute right-2 top-[3px]'/>
                    </div></div>
                 <div className='w-[1250px] h-auto overflow-hidden border-b-2 border-black
                   p-4 relative'>How does Period Slay work?
                   <div> <img src={cheveron} alt="" srcset="" className= 'absolute right-2 top-[3px]'/>
                    </div>
                </div>
                <div className='w-[1250px] h-auto overflow-hidden
                 p-4 relative border-b-2 border-black'>Is Period Slay free to use?
                 <div> <img src={cheveron} alt="" srcset="" className= 'absolute right-2 top-[3px]'/>
                    </div></div>
                <div className='w-[1250px] h-auto overflow-hidden border-b-2 border-black
                 p-4 relative'>Is my data secure on Period Slay?
                 <div> <img src={cheveron} alt="" srcset="" className= 'absolute right-2 top-[3px]'/>
                    </div></div>
                <div className='w-[1250px] h-auto overflow-hidden border-b-2 border-black
                 p-4 relative'>What kind of educational resources does Period Slay provide?
                 <div> <img src={cheveron} alt="" srcset="" className= 'absolute right-2 top-[3px]'/>
                    </div></div>
                 <div className='w-[1250px] h-auto overflow-hidden border-b-2 border-black 
                 p-4 relative'>Can I share my period tracking data with my healthcare provider?
                 <div> <img src={cheveron} alt="" srcset="" className= 'absolute right-2 top-[3px]'/>
                    </div></div>
                </div>
                
                </div>
            <div className='ml-[148px] flex flex-col gap-3'>
                <h1 className='font-DMSerif text-3xl font-bold'>Still Have Questions?</h1>
                <h5 className='font-Jost'>Contact us for more information or assistance</h5>
                <button className='bg-neutral1000 rounded-[3px] w-[150px] h-[35px] text-white p-[16px, 32px, 16px, 32px]'>Contact</button>
            </div>
            <div className='bg-primary500 w-94 h-80 mt-40'>
                    <div className='ml-40'>
                    <div className='text-white  p-10 leading-15'>
                    <h1 className='text-4xl font-normal font-DmSerif '>Stay Updated with our 
                    <br />Newsletter</h1>
                    <h6 className='font-Jost mt-5'>Subscribe to our newsletter for the latest blog pots & health tips</h6>
                    </div>
                    <div className='flex gap-3 ml-10 '>
                    <input type="button" className='bg-white w-80  '/>
                    <button  className='bg-black text-white w-35 text-sm p-2' >Get Updates</button>
                    </div>
                    <h6 className='text-white text-sm mt-5 ml-10'>By subscribing, you agree to our terms and conditions</h6>
                    </div>
                    
                    </div>
            </div>
            
            
            <Footer />
             </> ) }