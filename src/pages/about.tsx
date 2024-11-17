import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-violet-950 to-black px-6 py-16">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Heading Section */}
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        About Me
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mt-4">
                        A fusion of technology, creativity, and passion.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                        <p>
                            I’m passionate about blending <strong>art and technology</strong>
                            to create impactful experiences. My interests span
                            <span className="text-violet-400"> singing</span>,
                            <span className="text-violet-400"> photography</span>,
                            <span className="text-violet-400"> cinematography</span>, and
                            <span className="text-violet-400"> music</span>.
                        </p>
                        <p>
                            A proud <span className="text-violet-400">Manchester City fan ⚽</span>,
                            I also enjoy <span className="text-violet-400">cricket</span>,
                            <span className="text-violet-400"> chess</span>, and
                            <span className="text-violet-400"> Formula 1</span>.
                            Traveling, exploring unique cuisines, and connecting with nature inspire me.
                        </p>
                        <p>
                            As a <strong>tech nerd</strong>, I strive to combine innovation with creativity.
                            Life is a canvas, and I aim to paint it with both pixels and emotions.
                        </p>
                    </div>

                    {/* Interactive Image */}
                    <div className="relative group">
                        <div
                            className="absolute inset-0 rounded-lg bg-gradient-to-tr from-violet-400 via-pink-500 to-blue-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        ></div>
                        <img
                            src="https://capsulesight.com/326-FutureDigitalArtARThroughSora-feature.webp"
                            alt="Artistic Representation"
                            className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Blog Section */}
                <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-violet-400 mb-8 text-center">
                        My Blogs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Blog 1 */}
                        <div className="relative group p-6 bg-black/40 border border-violet-400 rounded-xl shadow-lg transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            <h3 className="text-2xl font-bold text-violet-400 group-hover:text-pink-400">
                                Exploring the Art of Storytelling
                            </h3>
                            <p className="text-gray-300 mt-2">
                                A dive into how photography captures the beauty and essence of life.
                            </p>
                            <div className="absolute bottom-4 right-4 text-violet-400 group-hover:text-pink-400">
                                ➔
                            </div>
                        </div>
                        {/* Blog 2 */}
                        <div className="relative group p-6 bg-black/40 border border-violet-400 rounded-xl shadow-lg transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            <h3 className="text-2xl font-bold text-violet-400 group-hover:text-pink-400">
                                The Intersection of Tech & Creativity
                            </h3>
                            <p className="text-gray-300 mt-2">
                                How technology empowers artists to bring their visions to life.
                            </p>
                            <div className="absolute bottom-4 right-4 text-violet-400 group-hover:text-pink-400">
                                ➔
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
