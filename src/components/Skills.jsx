import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        Frontend: [
            { name: 'HTML', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS69D4OAx8WG_ibtIAFCkWz_G8wY6leA_t1Z2Q1qkBFsPgvZd0sy0SqraZfx6M_PAKsMjA5sTExlgETje6So2GXR3dgbFWSF2XKnoqIJAEDeppWEBFUVtwct7A1x5nOqzJHuEgL4G-mEouGbMH7soFaQrdQSmuJlR7PlW6H-Z74jUlECDkQ_uX4Jek5kcHYPPiGSf1h1CLb4gd3cXk2wzei-MqCHzrQx6q3M7lxSfdFFRBqHQMOCGFuuA9csB9XZ3_K-oFsM-wd1Q' },
            { name: 'CSS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOZHmfiUvhm-eG1n-TpjVY6g9xc9ZGwq5kDlAprKCuSN1ftaF9ZEWV18hUGEDwxnKmUN3nb9ZIoFPEuddPeaWQjjvW3xgQR1PFfym9ZajMM84tM53IsTbpdNIwrI_9Q9JOX8dpUGfO0qswszDF0_FMz5mQn7169nDBrY7AgmTA1HZ_KM2s1cziNXsQH4FXMzFwdy9_DIqklOWIjG-C32hCFazaPdBHAv3kQUhamJ0NGSQHUAhgPgvNuQOjIBsX6wiRrvSEnv4A8hI' },
            { name: 'JavaScript', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYfqbcAamKK1k1DcHKlTIIgVbU9p2lIRTWWVQFTC7x2r1MFQhNDMgK5F_7QkDtw0XuPnJji_DnFs2b0969SfRtBayHiig6le-Xjp9HQ1dK4Wv4TtMVl1XMDxXONJGMK8eQKPXgIuNSv6lfHXfPvp-kHXWjkgpR4J8TFykU1LWU-5CBVdA9QIEm4XAo0HFGhJEGLr8YczrVLqm0w0LVcrFPyaQ_rWF2BIx-RYYa3n5FKlh4Qtv95eoa-qk--NZCSDzI_FPq1_5GST4' },
            { name: 'React JS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZHkH9gXy7aRWzU8Bn95oqKv62Z9bssS8dFAL2XQ8j2fTNfGW4A87GHUYg7hBI6OvM9MEpDfE99AJVBWemE07v52yBronuYSZbSPp5mopdBsGE0w-iboZeCOdJIBr-bynrU1YdN37r76OiPcal8vDQCyAo3k20mMUIJbRLrFNWQzT5dgADEgKQUMMfgLxoSXcO1UcGkD3mQvgEKGjZmAKv7X42w3ppLTKqypI59Qd1qm4uXDTYbQKTXnHvr3Qn0ZaSq1MKN62Cg4' },
            { name: 'Tailwind CSS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-yEdDsJysX3G78biskYzNjLU0HYjzC1UqADj0reLloJl9Tj3n8jLBwq6rusz9h40Tk53eoqCQKLjHGuVCglHVlFAlAJLme3Mvy5PgTJsz7J0vLDwA8RMGL4klyjUdpQPqoFkQoDrIs179GdLwama9lM_TQr2RvEfisN6A9t_4fatxsEjOa8y9lOoUEEbMmAkYAhiKBStQN2d2a4QOn1NAYzLYCAGKzCwY89ElCnVFzMlB4BGyiCQSaBqkEC1VSWTB3zkCO9K4g7k' },
        ],
        Backend: [
            { name: 'Node JS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqALwgSuznH04ceiKTQf_AdoNMkA0hPN2SYwofUbSKRYsvYKRQ8Eww4193a2d2Ss_hapU8GzwcJGbt3oVtTCJT8emjjLpzUbp0OFh-oe7FC2CHyqwIM7CWAweYRswKv4VHtFkWP5Qj5RHBup-_uto3K_sg3j_TT55ueN5yydUgKYlQFrCscTJxq9ENoTWdP915NrMdS7ylPlseV08ojn1SJ6pvlR0N0Y2H2_wX0EHj99WkfuVqNKQ-2hzb_IvCneWfmzQpUZfHWOw' },
            { name: 'Express JS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJgMrDvWf-twsI6To6WntFFlimdBfzcgka7q2oBmmbwoUL4TwF8eat22sbp22jJZWHUUMiWMiHNoTXVsOLC13Ay5t8QgXrIhetSq8xudMoaqUtxZIzURYa4FpP9tSZtCzZQnva5s-cMZLbaAFZMY6dpt_QGsajshwPKhp18p3yZ7N9DtvWBRhX34dWmIJuFYOhaBr7p63IwGXf-oipmdfjSKR4WzxowQ0N3hj7ZPiVC1RKg7idAUGYPQlY8StY6NliLftVND-VZ-U', invert: true },
            { name: 'MongoDB', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbt2y5Y99EVwKCtuAaKipsKco5in-oVdb6Vx-ijz9tEweNR3sTHerAgVixuC4s4oQRHakqYQUFymmMVbbISb1BwQA75C_GHlEo_RtcybRAYagk1zDTAJJa8tJvTEfh3zBfiWnC70-HX1BoyK19QfTIhq2FWNY1BcPqU6Oy0K88GWGoEFAfyU6mPqczP9AhDnCQusHYgkSaV5tLRZwbIYeQ6Q8W72XJzy5gPTKIjFKNpctxBIQMxFW51saVsDma2OgQJVgxydheLRE' },
            { name: 'Firebase', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOpP2Oi1Q4O0PiwAIWlEqaEXzqx7yssoEjuLivszh61dVCkOkAI-ew7D7F0SXUCKbG6cBObThZdI32-QfJB1NPBGd5hld-GyFskXIcQZ81AzFcrPDz4sP7MZ4Qqa70MJg2-a5vB_bf2V7HRK8lI9gISSSR_UyckamiX3PztERcbk8eZHmUqOvgxmO1P6VvHIvamDONtbxh9hi7yGRXZ_iZxa-v5vKHopSon4M8le6BfB2AfwKRCnomnz_9B8DBeITiiVD2lCO8vhk' },
        ],
        Languages: [
            { name: 'JavaScript', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkKnBd0WSA3VR3SDrC48PjA3_uAYxNcWotzLBAsWbClwMSeqOOnohLuF7Yc7maCKE0F93pMdO7pw6OffIRMXiNSNLzUJzqY40dyfiGs_0xBgBfoRWw_PikRkETrP_Wygc-1Ng7VscQoj2XxSMXL5cbW_mrHRFixMsywJZ4WroBw46avr-X3Us9NFqErU6ACmmzWBFZ88KL3kbhNWEQb14wW9LFlHP1P7wWtfyNY1ZEWRESIicHVc3hy_egzNXunmlpgfVR07zRLoE' },
        ],
        Tools: [
            { name: 'Git', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ZABY3mW32GaLu1souy4i1wnRghdoNAa9m9Dj5_Ecw9jLTgeU8MjtZZMDjNNEoyUfaqZX1HfJY1MMGAQOzf3SZHfsOJTM2dSw9WRL5kwZFzj7q7gdm_5m3YH6y_yftSv-uN9G8dQY973pNoMYltrHE0CORokbh7itlk_QeKCAuviUprwiJdvxPV9Mc2qoteqhBLY_n--Gyz_I8deDiBIs3NtQ-Tc66hWITHOejviiNA2j6XEZRLgxxncUM9bVZd8xfDHmHJyzdc4' },
            { name: 'GitHub', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyC5-Oyvcl9VdjvkWeRuKpF-HaJgZNkC1QohxdtfFxbn7QaRl49WaYfX5nID69sC7keS11klikyk3PKDplLIGpi8o5-PgZPJeMask9IhEzrAa80Km5bkDeMYom0_eNgTur9stCHE4eeg2EoHa25IVnRFGn5Qf8bmig9eNF1zLfbRRmYDo6OlV_dLRUuLKVHgycGB_KK5QvXW9bPGHgQMwUoLO_aDn0sTWoWtlFWst5ReI5Ygo_z7JwSIkIR4rNoySJfUA3RJ5jZMg', invert: true },
            { name: 'VS Code', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgON7eAk8rXe5KVIF1wj3pUhPErS9ldGYFNwowYglG7hko4KmjBTxRhbq9aRuaEOoMXYiJJ9q8f8tx-4fy-fB8qjHeC4WVN11DQwjPZA-BGCUuta4CBS5YzbZkA5R72S_iFdZ3SabTUlgTugidH_axlgu-SCdkLHLyRQeA88V1B8N7QZdoU8N6__ahIGAUT4db88ge-acPMLov82yxpzP1j6Dvi7L2CwdDah3bSHK5Lv7Sj4JoJ3G_I45tl-ZLK8jrTHpsF-RYAdQ' },
            { name: 'Thunder Client', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8p3UWcAGW50dR7WC5nm2sGHkL_U8rof1Hmofy92z8yZ4yXPyT8e_RQoEAumC2he3R2kyeB8mFz2VjQ_-uYQHyawUh_BRF9XNzIKHbLiwAqXRd-iE5TrBqLSB2Y9BJ_jsQcMN7h2f_xlO8X5DbjP6_rkmEbV-k4A0uLRtmzo3PlQTbk4E67O7BDVznrSJk355Bv0bGGxgVDwAI3R96JsHOQllXr5c3fsgw-bjfzqzNYVe_G0Mwl_EB9s6INWFXYQbsevgBOQQqxRE' },
            { name: 'Vercel', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoUG8ewHh-DXLxniZrrQ_WR9ZufqXItBZ300b0Z8G-hh7UMDmPIHc9ILi8A7jm-YknA_7kAiiorSwrHRdjcy56-tExh90Uhu7PA5_aSuzaGsoVXBCQ1niX5Gdk4fSHfE77aueqiFqD5vvvZouvQMUNx0PDtvW81v4qxjxjgOz9wmdvYv_Qe4g82cX7HlzRs9DEHkE4bL4FSqIyOby_9gWnSX2y7hyRE8fhE-Y9y7mjYJ3_JhFlc0C6ietYXoIC_Su9HSz_W7UT7U0', invert: true },
            { name: 'Netlify', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfhoPrqIdxIPRcCGcjzyV5BMzcIlLeqJj1oI3ydXXSta_t1V1NkblArgV_W_yO8SdVxxsd8D20cK6fO4iTgYiiJJ7ewILky56r05H0hoRzKz1y8uS8g9V_v71i6j-JocYwLnu1GtMWnGXMsWtetOLo2SXtemNdXrE3vgXRnTTSdBI8XTBcAgdcJZ5H1TvFpnMLLwLYN041lG13p6wjf0bOtuuAbo3d3e8lTsPMpIyhPmy3KddcVTjX-AUpCgo7-lPtHyk5YR9UnuI' },
            { name: 'Figma', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYYkYrXCyt8aIiXcnXjQqybRwlYsaVo263G5KaDMiQjzfnIM9CvM-LrJ-yeieirm9U1OekWtRhzD6gsEtm-61otursNKjRGnlDSrygCxga7qSNBFDCqoosR5PdEltc-OaYqi_4FLUkT9FSmEZJYWtgtAZeDdm94xedTDgXoHd8tAwU0wcPD-eyT8X8QxKVApf50r7ySYudKkRyykMAOcDeYnv22__CKxOVxY3C_9UKp0A2ba-n5xl8Zkxtxep_tLB0ERjXe-0s2_4' },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div id="skills" className="container mx-auto max-w-6xl relative z-10 px-4 py-16 sm:py-24 overflow-hidden">
            {/* Floating Background Particles */}
            <motion.div
                className="absolute top-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
                animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
                animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                    SKILLS
                </h2>
                <div className="mt-2 flex justify-center">
                    <motion.div
                        className="w-20 h-1 bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                    A collection of my technical skills and expertise honed through various projects and experiences
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {Object.entries(skills).map(([category, items]) => (
                    <motion.div
                        key={category}
                        variants={itemVariants}
                        className="p-8 bg-slate-50/50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 backdrop-blur-sm relative overflow-hidden group"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div
                            className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 relative z-10">{category}</h3>
                        <div className="flex flex-wrap gap-4 relative z-10">
                            {items.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="flex items-center gap-2 py-2 px-4 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 cursor-default"
                                    whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                                >
                                    <motion.img
                                        alt={`${skill.name} icon`}
                                        className={`w-5 h-5 ${skill.invert ? 'invert dark:invert-0' : ''}`}
                                        src={skill.icon}
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: Math.random() * 1 // Random delay for natural feel
                                        }}
                                    />
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
