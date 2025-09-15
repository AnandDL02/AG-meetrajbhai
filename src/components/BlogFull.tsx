// import React, { useState } from "react";
// import {
//   Phone,
//   Download,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Mail,
//   MessageCircle,
//   Share2,
//   Calendar,
//   Tag,
//   User,
//   ExternalLink,
//   ChevronRight,
//   Clock,
//   Globe,
//   TrendingUp,
//   Award,
//   Users,
//   CheckCircle,
// } from "lucide-react";
// import groundnutsHero from "../image/Premium Spices.jpg";
// import authorProfile from "../image/Premium Spices.jpg";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Badge } from "../components/ui/badge";

// const videoList = [
//   { id: "dQw4w9WgXcQ", title: "How We Sort & Grade Groundnuts" },
//   { id: "kXYiU_JCYtU", title: "Moisture Testing & Aflatoxin Prevention" },
//   { id: "3JZ_D3ELwOQ", title: "Packaging & Export Documentation" },
//   { id: "fRh_vgS2dFE", title: "Quality Control: Lab Tests Explained" },
//   { id: "eVTXPUF4Oz4", title: "Market Insights: Top Import Countries" },
// ];

// const relatedPosts = [
//   { 
//     title: "Coriander Export Guide: From Farm to Global Market", 
//     href: "#",
//     readTime: "8 min read",
//     category: "Export Guide"
//   },
//   { 
//     title: "Cumin Seeds Export: How to Find Buyers Worldwide", 
//     href: "#",
//     readTime: "6 min read",
//     category: "Market Analysis"
//   },
//   { 
//     title: "Top 5 Documents Needed in Agriculture Export", 
//     href: "#",
//     readTime: "4 min read",
//     category: "Documentation"
//   },
//   { 
//     title: "India's Role in Global Agri-Trade", 
//     href: "#",
//     readTime: "10 min read",
//     category: "Industry Insights"
//   },
// ];

// const stats = [
//   { icon: Globe, label: "Countries Served", value: "25+" },
//   { icon: TrendingUp, label: "Years Experience", value: "40+" },
//   { icon: Award, label: "Quality Certifications", value: "ISO 9001" },
//   { icon: Users, label: "Happy Clients", value: "500+" },
// ];

// export default function BlogFull() {
//   const [comment, setComment] = useState({ name: "", email: "", text: "" });
//   const [commentsList, setCommentsList] = useState([]);
//   const [notify, setNotify] = useState("");

//   const defaultPost = {
//     title: "Groundnut Export Tips: How to Choose the Best Quality for Global Buyers",
//     heroImage: groundnutsHero,
//     author: {
//       name: "Meetraj Piprotar",
//       photo: authorProfile,
//       bio: "Founder & CEO of Shree Hari International. Exporting premium coriander, cumin, groundnuts, and agri products worldwide.",
//       linkedin: "#",
//       instagram: "#",
//       email: "info@shreehariinternational.in",
//       phone: "+919099934142",
//     },
//     published: "09 September 2025",
//     updated: "09 September 2025",
//     readTime: "12 min read",
//     category: "Agriculture Export",
//     tags: [
//       "Groundnuts",
//       "Agriculture Export", 
//       "Global Trade",
//       "Farming Business",
//       "Export Tips",
//     ],
//     slug: "/blog/groundnut-export-tips",
//     catalogue: "/assets/shreehari-catalogue.pdf",
//   };

//   function handleCommentSubmit(e) {
//     e.preventDefault();
//     if (!comment.name || !comment.email || !comment.text) {
//       setNotify("Please fill all comment fields.");
//       setTimeout(() => setNotify(""), 3000);
//       return;
//     }
//     setCommentsList((s) => [
//       { ...comment, date: new Date().toLocaleString() },
//       ...s,
//     ]);
//     setComment({ name: "", email: "", text: "" });
//     setNotify("Comment submitted successfully!");
//     setTimeout(() => setNotify(""), 3000);
//   }

//   const VideoEmbed = ({ id, title }) => (
//     <Card className="overflow-hidden">
//       <CardContent className="p-0">
//         <div className="relative pb-[56.25%] overflow-hidden">
//           <iframe
//             title={title}
//             src={`https://www.youtube.com/embed/${id}`}
//             className="absolute inset-0 w-full h-full"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       </CardContent>
//       <CardHeader>
//         <CardTitle className="text-sm font-medium">{title}</CardTitle>
//       </CardHeader>
//     </Card>
//   );

//   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       {/* Floating Social Share */}
//       <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
//         <Button
//           size="sm"
//           className="w-10 h-10 p-0 bg-green-600 hover:bg-green-700 text-white shadow-elegant"
//           onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(defaultPost.title + " " + shareUrl)}`, '_blank')}
//         >
//           <MessageCircle size={16} />
//         </Button>
//         <Button
//           size="sm" 
//           className="w-10 h-10 p-0 bg-blue-700 hover:bg-blue-800 text-white shadow-elegant"
//           onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
//         >
//           <Facebook size={16} />
//         </Button>
//         <Button
//           size="sm"
//           className="w-10 h-10 p-0 bg-sky-500 hover:bg-sky-600 text-white shadow-elegant"
//           onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultPost.title)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
//         >
//           <Twitter size={16} />
//         </Button>
//         <Button
//           size="sm"
//           className="w-10 h-10 p-0 bg-blue-600 hover:bg-blue-700 text-white shadow-elegant"
//           onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(defaultPost.title)}`, '_blank')}
//         >
//           <Linkedin size={16} />
//         </Button>
//       </div>

//       {/* Hero Section */}
//       <header className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
//         <img
//           src={defaultPost.heroImage}
//           alt={defaultPost.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
//           <div className="container mx-auto px-4 h-full flex items-end pb-12">
//             <div className="max-w-4xl">
//               <Badge variant="secondary" className="mb-4 bg-agriculture-green text-white">
//                 {defaultPost.category}
//               </Badge>
//               <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
//                 {defaultPost.title}
//               </h1>
//               <div className="flex items-center gap-6 text-white/90 mb-6">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={defaultPost.author.photo}
//                     alt={defaultPost.author.name}
//                     className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
//                   />
//                   <div>
//                     <p className="font-medium">{defaultPost.author.name}</p>
//                     <div className="flex items-center gap-4 text-sm text-white/70">
//                       <span className="flex items-center gap-1">
//                         <Calendar size={14} />
//                         {defaultPost.published}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Clock size={14} />
//                         {defaultPost.readTime}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 <Button 
//                   className="bg-agriculture-green hover:bg-agriculture-green-light text-white"
//                   onClick={() => window.open(defaultPost.catalogue, '_blank')}
//                 >
//                   <Download size={16} className="mr-2" />
//                   Download Catalogue
//                 </Button>
//                 <Button 
//                   variant="outline" 
//                   className="border-white text-white hover:bg-white hover:text-agriculture-green"
//                   onClick={() => window.open(`tel:${defaultPost.author.phone}`)}
//                 >
//                   <Phone size={16} className="mr-2" />
//                   Contact Us
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Stats Section */}
//       <section className="py-12 bg-agriculture-green-lighter">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-agriculture-green text-white mb-3">
//                   <stat.icon size={24} />
//                 </div>
//                 <div className="text-2xl font-bold text-agriculture-green mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-muted-foreground">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
//         {/* Article Column */}
//         <article className="lg:col-span-2 space-y-8">
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2">
//             {defaultPost.tags.map((tag) => (
//               <Badge key={tag} variant="outline" className="text-xs">
//                 <Tag size={12} className="mr-1" />
//                 {tag}
//               </Badge>
//             ))}
//           </div>

//           {/* Content */}
//           <div className="prose prose-lg max-w-none">
//             <p className="text-xl text-muted-foreground leading-relaxed">
//               Exporting high-quality groundnuts from India is a growing business opportunity. 
//               This comprehensive guide helps you identify premium grade kernels, understand 
//               export procedures, and connect with global buyers effectively.
//             </p>

//             <Card className="my-8 bg-agriculture-green-lighter border-agriculture-green-light">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2 text-agriculture-green">
//                   <TrendingUp size={20} />
//                   Market Opportunity
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>India is one of the world's leading groundnut producers and exporters. 
//                 Global demand continues to grow across Southeast Asia, Middle East, and Europe, 
//                 driven by food processing industries, edible oil production, and expanding snack markets.</p>
//               </CardContent>
//             </Card>

//             <h2 className="text-2xl font-bold text-agriculture-green mt-8 mb-4">
//               Quality Parameters for Premium Groundnuts
//             </h2>
            
//             <Card className="overflow-hidden">
//               <CardHeader>
//                 <CardTitle>Quality Comparison Table</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-muted">
//                       <tr>
//                         <th className="px-6 py-3 text-left font-medium">Parameter</th>
//                         <th className="px-6 py-3 text-left font-medium text-green-700">Premium Grade</th>
//                         <th className="px-6 py-3 text-left font-medium text-red-600">Standard Grade</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="border-t">
//                         <td className="px-6 py-4 font-medium">Moisture Level</td>
//                         <td className="px-6 py-4 text-green-700">&lt; 8%</td>
//                         <td className="px-6 py-4 text-red-600">&gt; 12%</td>
//                       </tr>
//                       <tr className="border-t bg-muted/30">
//                         <td className="px-6 py-4 font-medium">Kernel Size</td>
//                         <td className="px-6 py-4 text-green-700">Bold (38/42)</td>
//                         <td className="px-6 py-4 text-red-600">Small/Mixed</td>
//                       </tr>
//                       <tr className="border-t">
//                         <td className="px-6 py-4 font-medium">Color</td>
//                         <td className="px-6 py-4 text-green-700">Natural & Uniform</td>
//                         <td className="px-6 py-4 text-red-600">Dull/Discolored</td>
//                       </tr>
//                       <tr className="border-t bg-muted/30">
//                         <td className="px-6 py-4 font-medium">Aflatoxin Status</td>
//                         <td className="px-6 py-4 text-green-700">Lab Certified</td>
//                         <td className="px-6 py-4 text-red-600">Not Tested</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             <h2 className="text-2xl font-bold text-agriculture-green mt-8 mb-4">
//               Export Process: Step-by-Step Guide
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {[
//                 { step: "01", title: "Sourcing", desc: "Direct procurement from verified farmers" },
//                 { step: "02", title: "Sorting", desc: "Advanced sortex machine processing" },
//                 { step: "03", title: "Testing", desc: "Quality & aflatoxin certification" },
//                 { step: "04", title: "Packaging", desc: "Export-grade containers & labeling" },
//                 { step: "05", title: "Documentation", desc: "Phyto, fumigation, COA preparation" },
//                 { step: "06", title: "Shipment", desc: "Timely delivery to destination ports" },
//               ].map((item) => (
//                 <Card key={item.step} className="border-agriculture-green-light">
//                   <CardContent className="p-4">
//                     <div className="flex items-start gap-3">
//                       <div className="w-8 h-8 rounded-full bg-agriculture-green text-white flex items-center justify-center text-sm font-bold">
//                         {item.step}
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-agriculture-green">{item.title}</h3>
//                         <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <h2 className="text-2xl font-bold text-agriculture-green mt-8 mb-4">
//               Global Market Insights
//             </h2>

//             <Card className="bg-gradient-cta text-white">
//               <CardContent className="p-6">
//                 <h3 className="font-bold text-lg mb-3">Top Import Markets</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {["Vietnam", "Indonesia", "UAE", "Netherlands", "Egypt", "Malaysia"].map((country) => (
//                     <div key={country} className="flex items-center gap-2">
//                       <CheckCircle size={16} />
//                       <span>{country}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Expert Purchase Guide */}
//           <Card className="bg-muted/30">
//             <CardHeader>
//               <CardTitle className="text-agriculture-green">
//                 Expert Guide: How to Purchase Premium Seeds
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     title: "Supplier Verification",
//                     content: "Choose certified suppliers with ISO/FSSAI credentials and proven track records.",
//                     expert: "Raju Bhai Kotecha"
//                   },
//                   {
//                     title: "Physical Inspection", 
//                     content: "Check for uniform size, natural color, and absence of foreign particles.",
//                     expert: "Quality Team"
//                   },
//                   {
//                     title: "Moisture Testing",
//                     content: "Ensure moisture levels below 8% for optimal storage and export quality.",
//                     expert: "Lab Technicians"
//                   },
//                   {
//                     title: "Laboratory Analysis",
//                     content: "Conduct germination tests (85-90%) and purity analysis before bulk purchase.",
//                     expert: "Nileshbhai Piprotar"
//                   }
//                 ].map((item, index) => (
//                   <div key={index} className="space-y-2">
//                     <h4 className="font-semibold text-agriculture-green">{item.title}</h4>
//                     <p className="text-sm text-muted-foreground">{item.content}</p>
//                     <p className="text-xs text-agriculture-green font-medium">- {item.expert}</p>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Videos Section */}
//           <section>
//             <h2 className="text-2xl font-bold text-agriculture-green mb-6">
//               Educational Videos
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {videoList.map((video) => (
//                 <VideoEmbed key={video.id} id={video.id} title={video.title} />
//               ))}
//             </div>
//           </section>

//           {/* Related Posts */}
//           <section>
//             <h3 className="text-xl font-bold text-agriculture-green mb-6">Related Articles</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {relatedPosts.map((post, index) => (
//                 <Card key={index} className="hover:shadow-card transition-all duration-300 cursor-pointer">
//                   <CardContent className="p-4">
//                     <Badge variant="outline" className="mb-2 text-xs">
//                       {post.category}
//                     </Badge>
//                     <h4 className="font-semibold mb-2 line-clamp-2">{post.title}</h4>
//                     <div className="flex items-center justify-between text-sm text-muted-foreground">
//                       <span>{post.readTime}</span>
//                       <ChevronRight size={16} />
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </section>

//           {/* Comments Section */}
//           <section>
//             <h3 className="text-xl font-bold text-agriculture-green mb-6">Comments & Discussion</h3>
            
//             <Card className="mb-6">
//               <CardHeader>
//                 <CardTitle className="text-lg">Leave a Comment</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleCommentSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                       value={comment.name}
//                       onChange={(e) => setComment({ ...comment, name: e.target.value })}
//                       placeholder="Your Name"
//                       className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring"
//                       required
//                     />
//                     <input
//                       value={comment.email}
//                       onChange={(e) => setComment({ ...comment, email: e.target.value })}
//                       placeholder="Your Email"
//                       type="email"
//                       className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring"
//                       required
//                     />
//                   </div>
//                   <textarea
//                     value={comment.text}
//                     onChange={(e) => setComment({ ...comment, text: e.target.value })}
//                     placeholder="Share your thoughts..."
//                     rows={4}
//                     className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring"
//                     required
//                   />
//                   <div className="flex items-center gap-4">
//                     <Button type="submit" className="bg-agriculture-green hover:bg-agriculture-green-light">
//                       Submit Comment
//                     </Button>
//                     {notify && (
//                       <p className={`text-sm ${notify.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
//                         {notify}
//                       </p>
//                     )}
//                   </div>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Comments List */}
//             <div className="space-y-4">
//               {commentsList.length === 0 ? (
//                 <Card>
//                   <CardContent className="p-6 text-center text-muted-foreground">
//                     No comments yet. Be the first to share your thoughts!
//                   </CardContent>
//                 </Card>
//               ) : (
//                 commentsList.map((comment, index) => (
//                   <Card key={index}>
//                     <CardContent className="p-4">
//                       <div className="flex items-start justify-between mb-2">
//                         <div>
//                           <p className="font-semibold">{comment.name}</p>
//                           <p className="text-sm text-muted-foreground">{comment.email}</p>
//                         </div>
//                         <p className="text-xs text-muted-foreground">{comment.date}</p>
//                       </div>
//                       <p className="text-sm">{comment.text}</p>
//                     </CardContent>
//                   </Card>
//                 ))
//               )}
//             </div>
//           </section>
//         </article>

//         {/* Sidebar */}
//         <aside className="space-y-6">
//           <div className="sticky top-6 space-y-6">
//             {/* Author Info */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">About the Author</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-start gap-3 mb-4">
//                   <img
//                     src={defaultPost.author.photo}
//                     alt={defaultPost.author.name}
//                     className="w-16 h-16 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="font-semibold">{defaultPost.author.name}</p>
//                     <p className="text-sm text-muted-foreground mt-1">
//                       {defaultPost.author.bio}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <Button size="sm" variant="outline" onClick={() => window.open(defaultPost.author.linkedin)}>
//                     <Linkedin size={14} />
//                   </Button>
//                   <Button size="sm" variant="outline" onClick={() => window.open(`mailto:${defaultPost.author.email}`)}>
//                     <Mail size={14} />
//                   </Button>
//                   <Button size="sm" variant="outline" onClick={() => window.open(`tel:${defaultPost.author.phone}`)}>
//                     <Phone size={14} />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Quick Contact */}
//             <Card className="bg-agriculture-green text-white">
//               <CardHeader>
//                 <CardTitle>Get in Touch</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <p className="text-sm opacity-90">
//                   Ready to import premium groundnuts? Contact us today!
//                 </p>
//                 <div className="space-y-2">
//                   <Button 
//                     size="sm" 
//                     variant="secondary" 
//                     className="w-full justify-start bg-white text-agriculture-green hover:bg-gray-100"
//                     onClick={() => window.open(`tel:${defaultPost.author.phone}`)}
//                   >
//                     <Phone size={14} className="mr-2" />
//                     Call Now
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     variant="secondary" 
//                     className="w-full justify-start bg-white text-agriculture-green hover:bg-gray-100"
//                     onClick={() => window.open(defaultPost.catalogue)}
//                   >
//                     <Download size={14} className="mr-2" />
//                     Download Catalogue
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     variant="secondary" 
//                     className="w-full justify-start bg-white text-agriculture-green hover:bg-gray-100"
//                     onClick={() => window.open(`mailto:${defaultPost.author.email}`)}
//                   >
//                     <Mail size={14} className="mr-2" />
//                     Send Email
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Share Article */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Share2 size={18} />
//                   Share Article
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex gap-2">
//                   <Button 
//                     size="sm" 
//                     variant="outline" 
//                     onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultPost.title)}&url=${encodeURIComponent(shareUrl)}`)}
//                   >
//                     <Twitter size={14} />
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     variant="outline"
//                     onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)}
//                   >
//                     <Facebook size={14} />
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     variant="outline"
//                     onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(defaultPost.title)}`)}
//                   >
//                     <Linkedin size={14} />
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     variant="outline"
//                     onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(defaultPost.title + " " + shareUrl)}`)}
//                   >
//                     <MessageCircle size={14} />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Newsletter Signup */}
//             <Card className="bg-gradient-cta text-white">
//               <CardHeader>
//                 <CardTitle>Stay Updated</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm opacity-90 mb-4">
//                   Get the latest export tips and market insights delivered to your inbox.
//                 </p>
//                 <div className="space-y-2">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full px-3 py-2 rounded-md text-foreground"
//                   />
//                   <Button size="sm" variant="secondary" className="w-full">
//                     Subscribe
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </aside>
//       </main>
//     </div>
//   );
// }