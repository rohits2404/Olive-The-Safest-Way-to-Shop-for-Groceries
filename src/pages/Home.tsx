import { motion } from "framer-motion";
import { ChevronDown, Heart, MoreHorizontal, MoveUpRight, Share } from "lucide-react";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import thumb4 from "../assets/thumb4.png";
import productImg from "../assets/product.png";

const AppleIcon = () => (
    <svg
        viewBox="0 0 384 512"
        fill="currentColor"
        className="w-4 h-4"
    >
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 49.7-.8 90.5-85 105.1-118-45.9-20.9-64.3-55.9-64.2-92.6zM250.8 98.2c22.1-27.1 33.3-60.8 28.5-98.2-28.5 2.1-66.4 20-88.5 47.1-18.8 22.8-32.3 58.4-26.5 93.9 32.5 1.5 66.8-18.6 86.5-42.8z" />
    </svg>
);

const LeafIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
);

export default function Home() {
    return (
        <div className="min-h-dvh w-full relative overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary">
                        <LeafIcon />
                        <span className="font-serif font-bold text-xl tracking-tight">Olive</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {["Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"].map((item) => (
                            <button key={item} className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                                {item}
                                <ChevronDown className="w-3 h-3 opacity-50" />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="hidden sm:block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                            Sign In
                        </button>
                        <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                            Get Olive
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 pb-24 px-6 relative z-10">
                <div className="max-w-160 mx-auto flex flex-col items-center text-center">
          
                    {/* Trust Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="flex -space-x-2">
                            {[avatar1, avatar2, avatar3, avatar4, avatar5].map((src, i) => (
                                <img 
                                key={i} 
                                src={src} 
                                alt="User" 
                                className="w-7 h-7 rounded-full border-2 border-background object-cover" 
                                />
                            ))}
                        </div>
                        <span className="text-xs font-medium text-foreground/70">
                            Trusted by thousands of healthy families
                        </span>
                    </motion.div>

                    {/* Hero Text */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-serif font-black text-foreground tracking-tight leading-[1.05] mb-6"
                    >
                        The Safest Way to<br />Shop for Groceries
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-130 mb-10 leading-relaxed"
                    >
                        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights
                    </motion.p>

                    {/* CTAs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-transform active:scale-95 shadow-sm">
                        <AppleIcon />
                            Download for iOS
                        </button>
                        <button className="flex items-center gap-1 font-semibold text-foreground hover:text-primary transition-colors group">
                            Join the Olive Community
                            <MoveUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Phone Mockup */}
                <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-20 max-w-85 mx-auto relative"
                >
                    {/* Phone Frame */}
                    <div className="bg-[#1C1C1E] p-2.5 rounded-[3rem] shadow-2xl relative z-10 border border-gray-800">
                        {/* Inner Screen */}
                        <div className="bg-white rounded-[2.5rem] overflow-hidden relative h-175 w-full flex flex-col font-sans">
              
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                            <div className="w-30 h-7 bg-[#1C1C1E] rounded-b-3xl"></div>
                        </div>

                        {/* App Header (Thumbs) */}
                        <div className="pt-12 px-5 pb-4 flex justify-between items-center border-b border-gray-100">
                            {[thumb1, thumb2, thumb3, thumb4].map((src, i) => (
                                <div key={i} className={`w-13 h-13 rounded-xl overflow-hidden ${i === 3 ? 'border-2 border-primary p-0.5' : 'opacity-60'}`}>
                                    <div className="w-full h-full rounded-lg overflow-hidden bg-gray-50">
                                        <img src={src} className="w-full h-full object-cover" alt="thumb" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
                            {/* Product Hero */}
                            <div className="px-5 py-6">
                                <div className="w-full h-48 bg-gray-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4">
                                    <img src={productImg} className="max-h-full object-contain drop-shadow-md" alt="Product" />
                                </div>
                  
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">LESLEY STOWE</p>
                                        <h2 className="text-xl font-bold text-gray-900 leading-tight pr-4">Fig and Olive Crackers, Fig and Olive</h2>
                                    </div>
                                    <div className="flex flex-col items-center shrink-0">
                                    {/* Score Circle */}
                                    <div className="w-14 h-14 rounded-full border-[3px] border-destructive flex items-center justify-center text-destructive font-bold text-lg">
                                        46
                                    </div>
                                    <span className="text-[10px] font-bold text-destructive uppercase mt-1">Avoid</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mt-4 text-gray-400">
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                                        <Share className="w-5 h-5" />
                                    </button>
                                    <div className="flex-1"></div>
                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="h-2 w-full bg-gray-50"></div>

                            {/* Oliver Says Section */}
                            <div className="px-5 py-6">
                                <div className="flex items-start gap-4 bg-primary/5 rounded-2xl p-4">
                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shrink-0">
                                        <LeafIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Oliver Says:</h3>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            This product's low score mainly comes from the processed sugars and artificial preservatives found in the ingredient list. While figs and olives are healthy, the cracker base uses refined flours...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-2 w-full bg-gray-50"></div>

                            {/* Breakdown Section */}
                            <div className="px-5 py-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Breakdown</h3>
                                    <div className="space-y-3">
                                        {/* Dummy items to show scroll */}
                                        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                                                <span className="text-sm font-medium text-gray-800">Added Sugars</span>
                                            </div>
                                            <span className="text-xs text-gray-500">High</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                                <span className="text-sm font-medium text-gray-800">Sodium</span>
                                            </div>
                                            <span className="text-xs text-gray-500">Moderate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
              
                            {/* Bottom Home Indicator */}
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center z-20">
                                <div className="w-1/3 h-1 bg-black/20 rounded-full"></div>
                            </div>
                        </div>
            
                        {/* Phone Buttons */}
                        <div className="absolute -left-0.5 top-30 w-0.75 h-8 bg-gray-700 rounded-l-sm"></div>
                        <div className="absolute -left-0.5 top-42.5 w-0.75 h-12 bg-gray-700 rounded-l-sm"></div>
                        <div className="absolute -left-0.5 top-57.5 w-0.75 h-12 bg-gray-700 rounded-l-sm"></div>
                        <div className="absolute -right-0.5 top-45 w-0.75 h-16 bg-gray-700 rounded-r-sm"></div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}