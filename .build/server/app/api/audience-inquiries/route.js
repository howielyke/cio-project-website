"use strict";(()=>{var e={};e.id=452,e.ids=[452],e.modules={3524:e=>{e.exports=require("@prisma/client")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1212:e=>{e.exports=require("async_hooks")},4770:e=>{e.exports=require("crypto")},6162:e=>{e.exports=require("stream")},1764:e=>{e.exports=require("util")},3757:e=>{e.exports=import("prettier/plugins/html")},5747:e=>{e.exports=import("prettier/standalone")},4492:e=>{e.exports=require("node:stream")},7220:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>b,patchFetch:()=>q,requestAsyncStorage:()=>y,routeModule:()=>x,serverHooks:()=>h,staticGenerationAsyncStorage:()=>f});var i={};t.r(i),t.d(i,{GET:()=>g,POST:()=>m,dynamic:()=>l});var o=t(9182),n=t(2007),s=t(6719),a=t(3442),u=t(3524),p=t(4616);let d=new u.PrismaClient,c=null;process.env.RESEND_API_KEY&&(c=new p.R(process.env.RESEND_API_KEY));let l="force-dynamic";async function m(e){try{let{name:r,email:t,inquiryType:i,message:o}=await e.json();if(!r||!t||!i||!o)return a.NextResponse.json({error:"All fields are required"},{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))return a.NextResponse.json({error:"Invalid email format"},{status:400});if(!["question","topic-suggestion","guest-recommendation","general"].includes(i))return a.NextResponse.json({error:"Invalid inquiry type"},{status:400});let n=await d.audienceInquiry.create({data:{name:r.trim(),email:t.trim().toLowerCase(),inquiryType:i,message:o.trim()}});if(c)try{let e={question:"Question for the Hosts","topic-suggestion":"Topic Suggestion","guest-recommendation":"Guest Recommendation",general:"General Inquiry"}[i]||"Inquiry",n={question:"#3b82f6","topic-suggestion":"#10b981","guest-recommendation":"#8b5cf6",general:"#f59e0b"}[i]||"#6b7280",s=`
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #dc2626; margin: 0;">The CIO Project</h1>
              <p style="color: #666; margin: 5px 0;">New Audience Inquiry</p>
            </div>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #374151; margin-top: 0;">Contact Information</h2>
              <p><strong>Name:</strong> ${r}</p>
              <p><strong>Email:</strong> ${t}</p>
            </div>
            
            <div style="background-color: ${n}1a; padding: 20px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid ${n};">
              <h3 style="color: ${n}; margin-top: 0; margin-bottom: 10px;">
                ${e}
              </h3>
            </div>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px;">
              <h3 style="color: #0369a1; margin-top: 0;">Message</h3>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${o}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Submitted on ${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}
              </p>
            </div>
          </div>
        `;await c.emails.send({from:"The CIO Project <notifications@resend.dev>",to:["Howie@SherpaTechs.com"],subject:`New ${e} from ${r}`,html:s}),console.log("Email notification sent successfully")}catch(e){console.error("Failed to send email notification:",e)}else console.log("Email notification skipped - Resend API key not configured");return a.NextResponse.json({success:!0,message:"Inquiry submitted successfully",id:n.id})}catch(e){return console.error("Error creating audience inquiry:",e),a.NextResponse.json({error:"Internal server error"},{status:500})}}async function g(){try{let e=await d.audienceInquiry.findMany({orderBy:{createdAt:"desc"}});return a.NextResponse.json(e)}catch(e){return console.error("Error fetching audience inquiries:",e),a.NextResponse.json({error:"Internal server error"},{status:500})}}let x=new o.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/audience-inquiries/route",pathname:"/api/audience-inquiries",filename:"route",bundlePath:"app/api/audience-inquiries/route"},resolvedPagePath:"/home/ubuntu/cio-project-website/app/app/api/audience-inquiries/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:y,staticGenerationAsyncStorage:f,serverHooks:h}=x,b="/api/audience-inquiries/route";function q(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:f})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[372,584],()=>t(7220));module.exports=i})();