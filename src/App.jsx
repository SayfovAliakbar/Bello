import logo from "@/assets/Frame (4).png"
import family from "@/assets/hero 1.png"
import comp from "@/assets/Frame (5).png"
import sisters from "@/assets/Frame (6).png"
import umbrella from "@/assets/Rectangle.png"
import a from "@/assets/top-rated 1.png"
import family2 from "@/assets/experience 1.png"
import star from "@/assets/insurance 1.png"
import one from "@/assets/Rectangle (1).png"
import family3 from "@/assets/Frame (7).png"
import man from "@/assets/Rectangle (2).png"
import boy from "@/assets/Rectangle (3).png"
import logos from "@/assets/Frame (8).png"

export default function App(){
  return <div>
    <div style={{	display: "flex", justifyContent: "space-between", alignItems: "center", padding: "50px"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "50px", fontSize: "20px"}}>
        <img src={logo} alt="" />
        <p>Life insurance</p>
        <p>Why Bello</p>
        <p>Help</p>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "50px", fontSize: "20px"}}>
        <button style={{border: "none", backgroundColor: "transparent", fontSize: "20px"}}>Log in</button>
        <button style={{backgroundColor: "transparent", fontSize: "20px", padding: "10px 20px", border: "1px solid grey", borderRadius: "10px"}}>Get my price</button>
      </div>
    </div>

    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "20px", padding: "50px"}}>
      <div>
        <p style={{color: "rgba(244, 103, 82, 1)"}}>MEET BELLO</p>
        <h1 style={{fontSize: "60px"}}>A new kind of <br/> life insurance</h1>
        <p>Secure your family's financial future, in as little as 10 minutes.</p>
        <button style={{backgroundColor: "rgba(244, 103, 82, 1)", fontSize: "20px", padding: "10px 20px", borderRadius: "10px", border: "none", color: "white"}}>Get my price</button>
      </div>
      <img src={family} alt="" />
    </div>

    <br/><br/><br/>

    <div style={{backgroundColor: "rgba(249, 245, 242, 1)", display: "flex", justifyContent: "space-around", alignItems: "center", fontSize: "20px", padding: "15px"}}>
      <img src={comp} alt="" />
      <div>   
        <p>Secure your future</p>
        <h1>It’s more affordable <br/>
        than you think</h1>
        <p>Life insurance shouldn’t be confusing or<br/> expensive. Bello’s term life insurance makes<br/> protecting your loved ones easy and affordable.</p>
        <button style={{border: "none", backgroundColor: "transparent", color: "rgba(18, 111, 134, 1)", fontSize: "20px"}}>Get My Price</button>
      </div>
    </div>

    <br/><br/><br/>

    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", fontSize: "20px"}}>
      <div>
        <p>Technology meets service</p>
        <h1>We're here to help</h1>
        <p>Bella, our smart bot, can guide you to your perfect <br/> policy. There’s also human help whenever you need <br/> it.</p>
        <button style={{border: "none", backgroundColor: "transparent", color: "rgba(18, 111, 134, 1)", fontSize: "20px"}}>Get help</button>
      </div>
      <img src={sisters} alt="" />
    </div>

    <br/><br/><br/>

    <div style={{textAlign: "center", fontSize: "20px", backgroundColor: "rgb(245, 245, 245)", padding: "10px 50px"}}>
      <img src={umbrella} style={{marginTop: "-120px"}} />
      <p>Top-Rated Term Life Insurance</p>
      <h1>You’re in safe hands</h1>
      <p>We've partnered with, [insert underwriter], one of the world’s largest, most trusted insurance companies. This <br/> means we can ensure reliability in paying Claims.</p>
      <br/><br/><br/>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{width: "300px", backgroundColor: "white", padding: "10px", textAlign: "center"}}>
          <img src={a} alt="" />
          <h2>Top-Rated</h2>
          <p>A+ Financial Strength Rating by A.M.</p>
          <p>Best.What does this mean?</p>
        </div>

        <div style={{width: "300px", backgroundColor: "white", padding: "10px", textAlign: "center"}}>
          <img src={family2} alt="" />
          <h2>Expert guidance</h2>
          <p>We've placed millions of dollars in coverage people nationwide.</p>
        </div>

        <div style={{width: "300px", backgroundColor: "white", padding: "10px", textAlign: "center"}}>
          <img src={star} alt="" />
          <h2>We care</h2>
          <p>We care about you. We’re a 5 star insurance company. Well… Close enough!</p>
        </div>
      </div>
    </div>

    <div style={{backgroundColor: "rgba(54, 56, 57, 1)", color: "white", textAlign: "center", padding: "25px", fontSize: "20px"}}>
      <p>How it works</p>
      <h1>Affordable life insurance in minutes</h1>
      <p>We use technology to save you time and money – no pushy sales agents, <br/> paperwork, or extra fees. Just a few clicks and you’re done.</p>
      <br/><br/><br/>
      <div className='ff' style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <div>
          <img src={one} alt="" />
          <h2>Get My Price</h2>
          <p>Choose the amount that you <br/> would like to be covered for <br/> and we’ll give you a quote.</p>
        </div>

        <div>
          <img src={one} alt="" />
          <h2>Get My Price</h2>
          <p>Choose the amount that you <br/> would like to be covered for <br/> and we’ll give you a quote.</p>
        </div>

        <div>
          <img src={one} alt="" />
          <h2>Get My Price</h2>
          <p>Choose the amount that you <br/> would like to be covered for <br/> and we’ll give you a quote.</p>
        </div>
      </div>
    </div>

    <div style={{backgroundColor: "rgba(249, 245, 242, 1)", display: "flex", justifyContent: "space-around", alignItems: "center", fontSize: "20px", padding: "25px 0px"}}>
      <img src={family3} alt="" />
      <div>
        <h1>Everything you need— <br/>
        completely free</h1>
        <p>Here’s the latest info, guides, and, helpful tools, from <br/> the Bello team. Learn about life insurance, finances, <br/> health and wellness.</p>
        <button style={{border: "none", backgroundColor: "transparent", color: "rgba(18, 111, 134, 1)", fontSize: "20px"}}>Visit Learning Center</button>
      </div>
    </div>

    <br/><br/><br/>

    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", fontSize: "20px", backgroundColor: "rgba(229, 243, 254, 1)", textAlign: "center"}}>
      <img src={man} alt="" />
      <div style={{marginRight: "300px"}}>
        <h1>Get Started Today.</h1>
        <p>Join the Bello community of people who are securing their financial future.</p>
        <button style={{backgroundColor: "rgba(244, 103, 82, 1)", fontSize: "20px", padding: "10px 20px", borderRadius: "10px", border: "none", color: "white"}}>Get my price</button>
      </div>
      <img src={boy} style={{marginTop: "250px"}}/>
    </div>

    <br/><br/><br/>

    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
      <div>
        <img src={logo} alt="" />
        <p>Bello is a trading name of Bello Insurance Services <br/> LLC. Bello policies are issued by [Insert Underwriter <br/> here].</p>
        <img src={logos} alt="" />
      </div>

      <div>
        <h3>Resources</h3>
        <p>Term life insurance plans</p>
        <p>Insurance calculator</p>
        <p>Guide to life insurance</p>
        <p>Contact</p>
        <p>FAQs</p>
      </div>

      <div>
        <h3>Resources</h3>
        <p>Term life insurance plans</p>
        <p>Insurance calculator</p>
        <p>Guide to life insurance</p>
        <p>Contact</p>
        <p>FAQs</p>
      </div>

      <div>
        <h3>Resources</h3>
        <p>Term life insurance plans</p>
        <p>Insurance calculator</p>
        <p>Guide to life insurance</p>
        <p>Contact</p>
        <p>FAQs</p>
      </div>
    </div>

  </div>
}