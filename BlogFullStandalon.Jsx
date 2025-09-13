import React, { useState } from 'react';

// Inline SVG Icons (replacing Lucide React)
const Icons = {
  Phone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Download: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Twitter: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Mail: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  MessageCircle: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  ),
  Globe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Award: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
  Users: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22,4 12,14.01 9,11.01"/>
    </svg>
  ),
  Tag: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  ),
};

// Sample images (replace with your actual image URLs)
const SAMPLE_IMAGES = {
  heroImage: "https://images.unsplash.com/photo-1590080876270-d87e59f34c1d?auto=format&fit=crop&w=1600&q=80",
  authorPhoto: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
};

export default function BlogFullStandalone() {
  const [comment, setComment] = useState({ name: "", email: "", text: "" });
  const [commentsList, setCommentsList] = useState([]);
  const [notify, setNotify] = useState("");

  const videoList = [
    { id: "dQw4w9WgXcQ", title: "How We Sort & Grade Groundnuts" },
    { id: "kXYiU_JCYtU", title: "Moisture Testing & Aflatoxin Prevention" },
    { id: "3JZ_D3ELwOQ", title: "Packaging & Export Documentation" },
    { id: "fRh_vgS2dFE", title: "Quality Control: Lab Tests Explained" },
    { id: "eVTXPUF4Oz4", title: "Market Insights: Top Import Countries" },
  ];

  const relatedPosts = [
    { 
      title: "Coriander Export Guide: From Farm to Global Market", 
      href: "#",
      readTime: "8 min read",
      category: "Export Guide"
    },
    { 
      title: "Cumin Seeds Export: How to Find Buyers Worldwide", 
      href: "#",
      readTime: "6 min read",
      category: "Market Analysis"
    },
    { 
      title: "Top 5 Documents Needed in Agriculture Export", 
      href: "#",
      readTime: "4 min read",
      category: "Documentation"
    },
    { 
      title: "India's Role in Global Agri-Trade", 
      href: "#",
      readTime: "10 min read",
      category: "Industry Insights"
    },
  ];

  const stats = [
    { icon: Icons.Globe, label: "Countries Served", value: "25+" },
    { icon: Icons.TrendingUp, label: "Years Experience", value: "40+" },
    { icon: Icons.Award, label: "Quality Certifications", value: "ISO 9001" },
    { icon: Icons.Users, label: "Happy Clients", value: "500+" },
  ];

  const defaultPost = {
    title: "Groundnut Export Tips: How to Choose the Best Quality for Global Buyers",
    heroImage: SAMPLE_IMAGES.heroImage,
    author: {
      name: "Meetraj Piprotar",
      photo: SAMPLE_IMAGES.authorPhoto,
      bio: "Founder & CEO of Shree Hari International. Exporting premium coriander, cumin, groundnuts, and agri products worldwide.",
      linkedin: "#",
      instagram: "#",
      email: "info@shreehariinternational.in",
      phone: "+919099934142",
    },
    published: "09 September 2025",
    updated: "09 September 2025",
    readTime: "12 min read",
    category: "Agriculture Export",
    tags: [
      "Groundnuts",
      "Agriculture Export", 
      "Global Trade",
      "Farming Business",
      "Export Tips",
    ],
    slug: "/blog/groundnut-export-tips",
    catalogue: "/assets/shreehari-catalogue.pdf",
  };

  function handleCommentSubmit(e) {
    e.preventDefault();
    if (!comment.name || !comment.email || !comment.text) {
      setNotify("Please fill all comment fields.");
      setTimeout(() => setNotify(""), 3000);
      return;
    }
    setCommentsList((s) => [
      { ...comment, date: new Date().toLocaleString() },
      ...s,
    ]);
    setComment({ name: "", email: "", text: "" });
    setNotify("Comment submitted successfully!");
    setTimeout(() => setNotify(""), 3000);
  }

  const VideoEmbed = ({ id, title }) => (
    <div style={styles.videoCard}>
      <div style={styles.videoWrapper}>
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${id}`}
          style={styles.videoIframe}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div style={styles.videoTitle}>
        <h4 style={styles.videoTitleText}>{title}</h4>
      </div>
    </div>
  );

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Styles object
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#1f2937',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: '1.6'
    },
    floatingShare: {
      position: 'fixed',
      left: '24px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    shareButton: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s'
    },
    hero: {
      position: 'relative',
      height: '70vh',
      overflow: 'hidden'
    },
    heroImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4), transparent)',
      display: 'flex',
      alignItems: 'end',
      padding: '48px 0'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      color: 'white'
    },
    badge: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      display: 'inline-block',
      marginBottom: '16px'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      lineHeight: '1.1'
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px'
    },
    authorPhoto: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid rgba(255,255,255,0.3)'
    },
    authorDetails: {
      color: 'rgba(255,255,255,0.9)'
    },
    authorMeta: {
      display: 'flex',
      gap: '16px',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.7)'
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    },
    button: {
      padding: '12px 24px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.2s'
    },
    primaryButton: {
      backgroundColor: '#16a34a',
      color: 'white'
    },
    outlineButton: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid white'
    },
    statsSection: {
      padding: '48px 0',
      backgroundColor: '#f0fdf4'
    },
    statsGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
      textAlign: 'center'
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    statIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: '#16a34a',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '12px'
    },
    statValue: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#16a34a',
      marginBottom: '4px'
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 16px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '48px'
    },
    article: {
      lineHeight: '1.7'
    },
    tagGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '32px'
    },
    tag: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    card: {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '32px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    cardHeader: {
      marginBottom: '16px'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#16a34a',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '32px'
    },
    tableHeader: {
      backgroundColor: '#f9fafb',
      padding: '12px',
      textAlign: 'left',
      fontWeight: '600',
      borderBottom: '1px solid #e5e7eb'
    },
    tableCell: {
      padding: '12px',
      borderBottom: '1px solid #e5e7eb'
    },
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      marginBottom: '32px'
    },
    processCard: {
      border: '1px solid #bbf7d0',
      borderRadius: '8px',
      padding: '16px'
    },
    processStep: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    },
    stepNumber: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#16a34a',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      flexShrink: 0
    },
    stepContent: {
      flex: 1
    },
    stepTitle: {
      fontWeight: '600',
      color: '#16a34a',
      marginBottom: '4px'
    },
    stepDesc: {
      fontSize: '14px',
      color: '#6b7280'
    },
    marketCard: {
      background: 'linear-gradient(135deg, #16a34a, #059669)',
      color: 'white',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '32px'
    },
    marketGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px'
    },
    marketItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    expertGuide: {
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '32px'
    },
    expertGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    },
    expertItem: {
      marginBottom: '16px'
    },
    expertTitle: {
      fontWeight: '600',
      color: '#16a34a',
      marginBottom: '8px'
    },
    expertContent: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '4px'
    },
    expertName: {
      fontSize: '12px',
      color: '#16a34a',
      fontWeight: '500'
    },
    videoSection: {
      marginBottom: '32px'
    },
    videoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    },
    videoCard: {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    videoWrapper: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden'
    },
    videoIframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    },
    videoTitle: {
      padding: '16px'
    },
    videoTitleText: {
      fontSize: '14px',
      fontWeight: '500',
      margin: 0
    },
    relatedGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      marginBottom: '32px'
    },
    relatedCard: {
      display: 'block',
      padding: '16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: 'white',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'box-shadow 0.2s'
    },
    relatedTitle: {
      fontWeight: '500',
      marginBottom: '8px'
    },
    relatedMeta: {
      fontSize: '12px',
      color: '#6b7280'
    },
    commentsSection: {
      marginTop: '48px'
    },
    commentForm: {
      backgroundColor: 'white',
      padding: '24px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      marginBottom: '24px'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '12px',
      marginBottom: '12px'
    },
    input: {
      padding: '12px',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      fontSize: '14px'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      fontSize: '14px',
      resize: 'vertical',
      marginTop: '12px'
    },
    commentsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    commentItem: {
      backgroundColor: 'white',
      padding: '16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px'
    },
    commentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px'
    },
    commentAuthor: {
      fontWeight: '500'
    },
    commentEmail: {
      fontSize: '12px',
      color: '#6b7280'
    },
    commentDate: {
      fontSize: '12px',
      color: '#9ca3af'
    },
    commentText: {
      fontSize: '14px',
      color: '#374151'
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    sidebarCard: {
      backgroundColor: 'white',
      padding: '20px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px'
    },
    sidebarTitle: {
      fontWeight: '600',
      marginBottom: '16px'
    },
    sidebarAuthor: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px'
    },
    sidebarAuthorPhoto: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      objectFit: 'cover'
    },
    sidebarLinks: {
      display: 'flex',
      gap: '8px'
    },
    sidebarLink: {
      fontSize: '12px',
      textDecoration: 'underline',
      color: '#16a34a'
    },
    quickContact: {
      fontSize: '14px',
      marginBottom: '4px'
    },
    shareButtons: {
      display: 'flex',
      gap: '8px',
      marginTop: '12px'
    },
    shareBtn: {
      padding: '8px',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      backgroundColor: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    ctaSection: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '48px 0',
      textAlign: 'center'
    },
    ctaContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px'
    },
    ctaTitle: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '8px'
    },
    ctaText: {
      marginBottom: '24px'
    },
    ctaButtons: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    ctaButton: {
      padding: '12px 20px',
      borderRadius: '6px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none'
    },
    ctaButtonPrimary: {
      backgroundColor: 'white',
      color: '#16a34a'
    },
    ctaButtonSecondary: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid white'
    },
    footer: {
      backgroundColor: '#111827',
      color: '#9ca3af',
      padding: '24px 0',
      textAlign: 'center'
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px'
    },
    // Responsive styles
    '@media (max-width: 768px)': {
      floatingShare: {
        display: 'none'
      },
      heroTitle: {
        fontSize: '2rem'
      },
      main: {
        gridTemplateColumns: '1fr',
        gap: '32px'
      },
      statsGrid: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      processGrid: {
        gridTemplateColumns: '1fr'
      },
      videoGrid: {
        gridTemplateColumns: '1fr'
      },
      relatedGrid: {
        gridTemplateColumns: '1fr'
      },
      expertGrid: {
        gridTemplateColumns: '1fr'
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Floating Social Share */}
      <div style={styles.floatingShare}>
        <button
          style={{...styles.shareButton, backgroundColor: '#25d366'}}
          onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(defaultPost.title + " " + shareUrl)}`, '_blank')}
          title="Share on WhatsApp"
        >
          <Icons.MessageCircle />
        </button>
        <button
          style={{...styles.shareButton, backgroundColor: '#1877f2'}}
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
          title="Share on Facebook"
        >
          <Icons.Facebook />
        </button>
        <button
          style={{...styles.shareButton, backgroundColor: '#1da1f2'}}
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultPost.title)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
          title="Share on Twitter"
        >
          <Icons.Twitter />
        </button>
        <button
          style={{...styles.shareButton, backgroundColor: '#0077b5'}}
          onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(defaultPost.title)}`, '_blank')}
          title="Share on LinkedIn"
        >
          <Icons.Linkedin />
        </button>
      </div>

      {/* Hero Section */}
      <header style={styles.hero}>
        <img
          src={defaultPost.heroImage}
          alt={defaultPost.title}
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <span style={styles.badge}>{defaultPost.category}</span>
            <h1 style={styles.heroTitle}>{defaultPost.title}</h1>
            <div style={styles.authorInfo}>
              <img
                src={defaultPost.author.photo}
                alt={defaultPost.author.name}
                style={styles.authorPhoto}
              />
              <div style={styles.authorDetails}>
                <p style={{fontWeight: '500', marginBottom: '4px'}}>{defaultPost.author.name}</p>
                <div style={styles.authorMeta}>
                  <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <Icons.Calendar />
                    {defaultPost.published}
                  </span>
                  <span style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <Icons.Clock />
                    {defaultPost.readTime}
                  </span>
                </div>
              </div>
            </div>
            <div style={styles.buttonGroup}>
              <button 
                style={{...styles.button, ...styles.primaryButton}}
                onClick={() => window.open(defaultPost.catalogue, '_blank')}
              >
                <Icons.Download />
                Download Catalogue
              </button>
              <button 
                style={{...styles.button, ...styles.outlineButton}}
                onClick={() => window.open(`tel:${defaultPost.author.phone}`)}
              >
                <Icons.Phone />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statIcon}>
                <stat.icon />
              </div>
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Article Column */}
        <article style={styles.article}>
          {/* Tags */}
          <div style={styles.tagGroup}>
            {defaultPost.tags.map((tag) => (
              <span key={tag} style={styles.tag}>
                <Icons.Tag />
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div>
            <p style={{fontSize: '20px', color: '#6b7280', lineHeight: '1.6', marginBottom: '32px'}}>
              Exporting high-quality groundnuts from India is a growing business opportunity. 
              This comprehensive guide helps you identify premium grade kernels, understand 
              export procedures, and connect with global buyers effectively.
            </p>

            <div style={{...styles.card, backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0'}}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>
                  <Icons.TrendingUp />
                  Market Opportunity
                </h3>
              </div>
              <p>India is one of the world's leading groundnut producers and exporters. 
              Global demand continues to grow across Southeast Asia, Middle East, and Europe, 
              driven by food processing industries, edible oil production, and expanding snack markets.</p>
            </div>

            <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#16a34a', marginTop: '32px', marginBottom: '16px'}}>
              Quality Parameters for Premium Groundnuts
            </h2>
            
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '16px'}}>Quality Comparison Table</h3>
              </div>
              <div style={{overflowX: 'auto'}}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableHeader}>Parameter</th>
                      <th style={{...styles.tableHeader, color: '#16a34a'}}>Premium Grade</th>
                      <th style={{...styles.tableHeader, color: '#dc2626'}}>Standard Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{...styles.tableCell, fontWeight: '500'}}>Moisture Level</td>
                      <td style={{...styles.tableCell, color: '#16a34a'}}>&lt; 8%</td>
                      <td style={{...styles.tableCell, color: '#dc2626'}}>&gt; 12%</td>
                    </tr>
                    <tr style={{backgroundColor: '#f9fafb'}}>
                      <td style={{...styles.tableCell, fontWeight: '500'}}>Kernel Size</td>
                      <td style={{...styles.tableCell, color: '#16a34a'}}>Bold (38/42)</td>
                      <td style={{...styles.tableCell, color: '#dc2626'}}>Small/Mixed</td>
                    </tr>
                    <tr>
                      <td style={{...styles.tableCell, fontWeight: '500'}}>Color</td>
                      <td style={{...styles.tableCell, color: '#16a34a'}}>Natural & Uniform</td>
                      <td style={{...styles.tableCell, color: '#dc2626'}}>Dull/Discolored</td>
                    </tr>
                    <tr style={{backgroundColor: '#f9fafb'}}>
                      <td style={{...styles.tableCell, fontWeight: '500'}}>Aflatoxin Status</td>
                      <td style={{...styles.tableCell, color: '#16a34a'}}>Lab Certified</td>
                      <td style={{...styles.tableCell, color: '#dc2626'}}>Not Tested</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#16a34a', marginTop: '32px', marginBottom: '16px'}}>
              Export Process: Step-by-Step Guide
            </h2>

            <div style={styles.processGrid}>
              {[
                { step: "01", title: "Sourcing", desc: "Direct procurement from verified farmers" },
                { step: "02", title: "Sorting", desc: "Advanced sortex machine processing" },
                { step: "03", title: "Testing", desc: "Quality & aflatoxin certification" },
                { step: "04", title: "Packaging", desc: "Export-grade containers & labeling" },
                { step: "05", title: "Documentation", desc: "Phyto, fumigation, COA preparation" },
                { step: "06", title: "Shipment", desc: "Timely delivery to destination ports" },
              ].map((item) => (
                <div key={item.step} style={styles.processCard}>
                  <div style={styles.processStep}>
                    <div style={styles.stepNumber}>{item.step}</div>
                    <div style={styles.stepContent}>
                      <h3 style={styles.stepTitle}>{item.title}</h3>
                      <p style={styles.stepDesc}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#16a34a', marginTop: '32px', marginBottom: '16px'}}>
              Global Market Insights
            </h2>

            <div style={styles.marketCard}>
              <h3 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '12px'}}>Top Import Markets</h3>
              <div style={styles.marketGrid}>
                {["Vietnam", "Indonesia", "UAE", "Netherlands", "Egypt", "Malaysia"].map((country) => (
                  <div key={country} style={styles.marketItem}>
                    <Icons.CheckCircle />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expert Purchase Guide */}
          <div style={styles.expertGuide}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>
                Expert Guide: How to Purchase Premium Seeds
              </h3>
            </div>
            <div style={styles.expertGrid}>
              {[
                {
                  title: "Supplier Verification",
                  content: "Choose certified suppliers with ISO/FSSAI credentials and proven track records.",
                  expert: "Raju Bhai Kotecha"
                },
                {
                  title: "Physical Inspection", 
                  content: "Check for uniform size, natural color, and absence of foreign particles.",
                  expert: "Quality Team"
                },
                {
                  title: "Moisture Testing",
                  content: "Ensure moisture levels below 8% for optimal storage and export quality.",
                  expert: "Lab Technicians"
                },
                {
                  title: "Laboratory Analysis",
                  content: "Conduct germination tests (85-90%) and purity analysis before bulk purchase.",
                  expert: "Nileshbhai Piprotar"
                }
              ].map((item, index) => (
                <div key={index} style={styles.expertItem}>
                  <h4 style={styles.expertTitle}>{item.title}</h4>
                  <p style={styles.expertContent}>{item.content}</p>
                  <p style={styles.expertName}>- {item.expert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Videos Section */}
          <section style={styles.videoSection}>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#16a34a', marginBottom: '24px'}}>
              Educational Videos
            </h2>
            <div style={styles.videoGrid}>
              {videoList.map((v) => (
                <VideoEmbed key={v.id} id={v.id} title={v.title} />
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section style={{marginBottom: '32px'}}>
            <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Related Posts</h3>
            <div style={styles.relatedGrid}>
              {relatedPosts.map((r, i) => (
                <a
                  key={i}
                  href={r.href}
                  style={styles.relatedCard}
                  onMouseOver={(e) => e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
                  onMouseOut={(e) => e.target.style.boxShadow = 'none'}
                >
                  <p style={styles.relatedTitle}>{r.title}</p>
                  <p style={styles.relatedMeta}>{r.readTime} • {r.category}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Comments */}
          <section style={styles.commentsSection}>
            <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Comments</h3>
            <form onSubmit={handleCommentSubmit} style={styles.commentForm}>
              <div style={styles.formGrid}>
                <input
                  value={comment.name}
                  onChange={(e) => setComment({ ...comment, name: e.target.value })}
                  placeholder="Name"
                  style={styles.input}
                />
                <input
                  value={comment.email}
                  onChange={(e) => setComment({ ...comment, email: e.target.value })}
                  placeholder="Email"
                  type="email"
                  style={styles.input}
                />
              </div>
              <textarea
                value={comment.text}
                onChange={(e) => setComment({ ...comment, text: e.target.value })}
                placeholder="Write your comment..."
                rows={4}
                style={styles.textarea}
              />
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px'}}>
                <button 
                  style={{...styles.button, ...styles.primaryButton}}
                  type="submit"
                >
                  Submit
                </button>
                {notify && <p style={{fontSize: '14px', color: '#16a34a'}}>{notify}</p>}
              </div>
            </form>

            <div style={styles.commentsList}>
              {commentsList.length === 0 && (
                <p style={{fontSize: '14px', color: '#6b7280'}}>No comments yet — be the first!</p>
              )}
              {commentsList.map((c, i) => (
                <div key={i} style={styles.commentItem}>
                  <div style={styles.commentHeader}>
                    <div>
                      <p style={styles.commentAuthor}>{c.name}</p>
                      <p style={styles.commentEmail}>{c.email}</p>
                    </div>
                    <p style={styles.commentDate}>{c.date}</p>
                  </div>
                  <p style={styles.commentText}>{c.text}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarCard}>
            <h4 style={styles.sidebarTitle}>Author</h4>
            <div style={styles.sidebarAuthor}>
              <img
                src={defaultPost.author.photo}
                alt={defaultPost.author.name}
                style={styles.sidebarAuthorPhoto}
              />
              <div>
                <p style={{fontWeight: '500'}}>{defaultPost.author.name}</p>
                <p style={{fontSize: '12px', color: '#6b7280'}}>{defaultPost.author.bio}</p>
              </div>
            </div>
            <div style={styles.sidebarLinks}>
              <a href={defaultPost.author.linkedin} style={styles.sidebarLink}>LinkedIn</a>
              <a href={defaultPost.author.instagram} style={styles.sidebarLink}>Instagram</a>
              <a href={`mailto:${defaultPost.author.email}`} style={styles.sidebarLink}>Email</a>
            </div>
          </div>

          <div style={styles.sidebarCard}>
            <h4 style={styles.sidebarTitle}>Quick Contact</h4>
            <p style={styles.quickContact}>
              Phone: <a href={`tel:${defaultPost.author.phone}`} style={styles.sidebarLink}>{defaultPost.author.phone}</a>
            </p>
            <p style={styles.quickContact}>
              Email: <a href={`mailto:${defaultPost.author.email}`} style={styles.sidebarLink}>{defaultPost.author.email}</a>
            </p>
            <a 
              href={defaultPost.catalogue} 
              style={{...styles.button, ...styles.outlineButton, color: '#16a34a', border: '1px solid #16a34a', marginTop: '12px'}}
              download
            >
              <Icons.Download /> Download PDF
            </a>
          </div>

          <div style={styles.sidebarCard}>
            <h4 style={styles.sidebarTitle}>Share</h4>
            <div style={styles.shareButtons}>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultPost.title)}`, '_blank')} 
                style={styles.shareBtn}
              >
                <Icons.Twitter />
              </button>
              <button 
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')} 
                style={styles.shareBtn}
              >
                <Icons.Facebook />
              </button>
              <button 
                onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`, '_blank')} 
                style={styles.shareBtn}
              >
                <Icons.Linkedin />
              </button>
            </div>
          </div>

          <div style={styles.sidebarCard}>
            <h4 style={styles.sidebarTitle}>Quick CTA</h4>
            <p style={{fontSize: '14px', marginBottom: '16px'}}>Want to import premium groundnuts?</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <a 
                href={`tel:${defaultPost.author.phone}`} 
                style={{...styles.button, ...styles.outlineButton, color: '#16a34a', border: '1px solid #16a34a', textDecoration: 'none'}}
              >
                <Icons.Phone /> Call
              </a>
              <a 
                href={defaultPost.catalogue} 
                style={{...styles.button, ...styles.primaryButton, textDecoration: 'none'}}
                download
              >
                <Icons.Download /> Download Catalogue
              </a>
              <a 
                href={`mailto:${defaultPost.author.email}`} 
                style={{...styles.button, ...styles.outlineButton, color: '#16a34a', border: '1px solid #16a34a', textDecoration: 'none'}}
              >
                <Icons.Mail /> Email
              </a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}