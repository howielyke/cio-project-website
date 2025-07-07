"use strict";(()=>{var e={};e.id=369,e.ids=[369],e.modules={3524:e=>{e.exports=require("@prisma/client")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1212:e=>{e.exports=require("async_hooks")},4770:e=>{e.exports=require("crypto")},6162:e=>{e.exports=require("stream")},1764:e=>{e.exports=require("util")},3757:e=>{e.exports=import("prettier/plugins/html")},5747:e=>{e.exports=import("prettier/standalone")},4492:e=>{e.exports=require("node:stream")},8101:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>v,patchFetch:()=>b,requestAsyncStorage:()=>y,routeModule:()=>x,serverHooks:()=>h,staticGenerationAsyncStorage:()=>f});var o={};t.r(o),t.d(o,{GET:()=>g,POST:()=>m,dynamic:()=>c});var s=t(9182),n=t(2007),i=t(6719),a=t(3442),p=t(3524),l=t(4616);let d=new p.PrismaClient,u=null;process.env.RESEND_API_KEY&&(u=new l.R(process.env.RESEND_API_KEY));let c="force-dynamic";async function m(e){try{let{name:r,email:t,company:o,title:s,message:n,budget:i}=await e.json();if(!r||!t||!o)return a.NextResponse.json({error:"Name, email, and company are required"},{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))return a.NextResponse.json({error:"Invalid email format"},{status:400});let p=await d.sponsor.create({data:{name:r.trim(),email:t.trim().toLowerCase(),company:o.trim(),title:s?.trim()||null,message:n?.trim()||null,budget:i||null}});if(u)try{let e=`
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #dc2626; margin: 0;">The CIO Project</h1>
              <p style="color: #666; margin: 5px 0;">New Sponsorship Inquiry</p>
            </div>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #374151; margin-top: 0;">Contact Information</h2>
              <p><strong>Name:</strong> ${r}</p>
              <p><strong>Email:</strong> ${t}</p>
              <p><strong>Company:</strong> ${o}</p>
              ${s?`<p><strong>Title:</strong> ${s}</p>`:""}
            </div>
            
            ${i?`
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: #d97706; margin-top: 0;">Budget Range</h3>
              <p style="margin: 0;">${i}</p>
            </div>
            `:""}
            
            ${n?`
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px;">
              <h3 style="color: #0369a1; margin-top: 0;">Message</h3>
              <p style="margin: 0; white-space: pre-wrap;">${n}</p>
            </div>
            `:""}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Submitted on ${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}
              </p>
            </div>
          </div>
        `;await u.emails.send({from:"The CIO Project <notifications@resend.dev>",to:["Howie@SherpaTechs.com"],subject:`New Sponsorship Inquiry from ${o}`,html:e}),console.log("Email notification sent successfully")}catch(e){console.error("Failed to send email notification:",e)}else console.log("Email notification skipped - Resend API key not configured");return a.NextResponse.json({success:!0,message:"Sponsor inquiry submitted successfully",id:p.id})}catch(e){return console.error("Error creating sponsor inquiry:",e),a.NextResponse.json({error:"Internal server error"},{status:500})}}async function g(){try{let e=await d.sponsor.findMany({orderBy:{createdAt:"desc"}});return a.NextResponse.json(e)}catch(e){return console.error("Error fetching sponsors:",e),a.NextResponse.json({error:"Internal server error"},{status:500})}}let x=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/sponsors/route",pathname:"/api/sponsors",filename:"route",bundlePath:"app/api/sponsors/route"},resolvedPagePath:"/home/ubuntu/cio-project-website/app/app/api/sponsors/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:y,staticGenerationAsyncStorage:f,serverHooks:h}=x,v="/api/sponsors/route";function b(){return(0,i.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:f})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[372,584],()=>t(8101));module.exports=o})();