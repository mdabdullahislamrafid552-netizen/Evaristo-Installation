import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const projects = [
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/589914506_18122395981531656_9165073396125804959_n.webp?stp=dst-webp_s1080x1080&_nc_cat=106&ig_cache_key=Mzc4MzA2MTU0NTMwMDA2NzI4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=oVJ7BSkwcRcQ7kNvwEXAF3w&_nc_oc=Adq-d2jk2gX1COkmVRfCIm2owZ-ljGn2Bfitws09u9bBcTl6T1CTjF1MBoSKvMxf_uw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=LyLSURYGe-3FvLSSiaAjzQ&_nc_ss=7a32e&oh=00_Afx5Gy9whJHPqaMyYDEPtfR_04cyGSlJyZ-QRyLHd2wecg&oe=69C65D34', title: 'Premium Installation', category: 'Tile' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/624887476_18092085911002465_7609780525694910766_n.webp?stp=dst-webp_s1080x1080&_nc_cat=102&ig_cache_key=MzExODY4MjYxMjkxMTAzNDE0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=lMP4Ss1GPmcQ7kNvwFRrEVR&_nc_oc=AdoLVl9K6XOjQRV0GNzsa7bhM4ujXZJ2HPcaRkEg9OPfr1Pc6M6qfqiV1e9jReLYbCw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=LyLSURYGe-3FvLSSiaAjzQ&_nc_ss=7a32e&oh=00_AfzATsNFpW3fhs2XGI9DbBLUpPpaOtcBzJ4U3Gi2SgYRNQ&oe=69C63BA4', title: 'Custom Detail', category: 'Marble' },
  { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/655253391_18105707095912193_3734431640584131023_n.webp?stp=dst-webp_p1080x1080&_nc_cat=110&ig_cache_key=MzQ1MDc1NTk1MjY5MTU5MDk2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=QXusRTwZ3SQQ7kNvwGyxJnm&_nc_oc=AdpKeynNKpC2yutd2VtJIqbKM_qMs5KbBlnE8fPcvvg2mkxiLZfZCDdrR50ojf0WPPo&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=LyLSURYGe-3FvLSSiaAjzQ&_nc_ss=7a32e&oh=00_AfwqoCpfx3FH9AzXbdb-oaHYVuSBVDV9KOBg0rPk3Y_M0A&oe=69C65D54', title: 'Luxury Finish', category: 'Flagstone' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/641783362_18582755161003013_2996112410678666187_n.webp?stp=dst-webp_s1080x1080&_nc_cat=103&ig_cache_key=MzExODY4MTAxMzI4NzIxNjE4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=npH_J4GuMjcQ7kNvwF7Bgol&_nc_oc=AdqLssCvgUFMBv2ffxS9t1sRf0S1kPR8JOyRYtVEXn5x10Qe5FKJMWgBRP7eGDybP7I&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=LyLSURYGe-3FvLSSiaAjzQ&_nc_ss=7a32e&oh=00_AfzALZgYfi6C0J-ld6xIRN20mcezz8vNyapn2ka264hf3A&oe=69C64636', title: 'Modern Design', category: 'Tile' },
  { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/618697076_17985802226945616_2667071811189210363_n.webp?stp=dst-webp_s1080x1080&_nc_cat=110&ig_cache_key=MzExODY4MTM1MTA5NjQ2NTYwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Vn6aVo8H79MQ7kNvwF22krV&_nc_oc=Adosxa7zTenUi9tzkNiX2M-633CyOpyNPYMCKcXAwm5t-hZYGQqNDE1CSNWIn1Qizok&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=LyLSURYGe-3FvLSSiaAjzQ&_nc_ss=7a32e&oh=00_AfzhI6QS8v-Af0cHa8xjwCwktwSs7v3OtH8rP2lnFYRXvg&oe=69C64EEF', title: 'Elegant Space', category: 'Marble' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/623308221_18094129489788869_159353479974553986_n.webp?stp=dst-webp_s1080x1080&_nc_cat=101&ig_cache_key=MzAxNjQwODM0NjM2NjIwNzQyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=OlKLmU2e7vcQ7kNvwE50o1Q&_nc_oc=AdpDPdT4ak3m2NENfL1bRkSy6G9auvUTkImRZia-c-QvZNRwUjEFDeNaPfzRkF7xAY8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=LyLSURYGe-3FvLSSiaAjzQ&_nc_ss=7a32e&oh=00_AfwGsDtB55nYDlyNiFqfETsqU0ccrcH8D7-kJoNj5fI5yw&oe=69C65C79', title: 'Outdoor Living', category: 'Hardscaping' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/621557680_18093062582064747_7146372594211077731_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=106&ig_cache_key=MjgyNzA1MzExNjU4NDUxNTU1Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ohTMwJ283aAQ7kNvwEoZ4Kd&_nc_oc=AdotjK-NBu20DXwMYCuWI6rXvFWaf_TDHjwHU9d3Aa6GjjniUn5tNC2-Uh3KySLOfO4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=DTBamF9LDrLNH9s2jqREXg&_nc_ss=7a32e&oh=00_Afzr_6RkOd3QOWbQ5bdBGgwxvQMZWGBXpaZkvuY1PSsCAw&oe=69C64F01', title: 'Bespoke Interior', category: 'Tile' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/622588826_18126520678475389_2420492198467362201_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=101&ig_cache_key=MjgwNjM2NzAxODQ0MzI1MjQxNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=J6ZH6DpNkVoQ7kNvwGsrk7r&_nc_oc=AdqPawBltgoOQWQ_kTzUKceLkJ2yExtMx9tcOh_Vdpr73RJNJgZEATiedwa4BpiL4-E&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=DTBamF9LDrLNH9s2jqREXg&_nc_ss=7a32e&oh=00_AfyScsbqgHboMxHRouXcVbPHEhaqZDdFn91h0eli2T4HFA&oe=69C64791', title: 'Classic Stone', category: 'Marble' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/621198593_18125428912550241_3071119376456962907_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=104&ig_cache_key=Mjc5Njk0OTM2MTI1MzAxMDMwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=uHgFmepIYMIQ7kNvwEjIQL5&_nc_oc=Adq4aTM737YqhnUtvcVP3zOmt_hW0iHHsakkYjwv8JWz336jHjoPZgMLlIuruYmViGo&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=DTBamF9LDrLNH9s2jqREXg&_nc_ss=7a32e&oh=00_Afy24G49lNT_T6cmVYHXClqMGXuy4DUNLyX_f_GITH1iTQ&oe=69C645E2', title: 'Artisan Craft', category: 'Tile' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/622864039_18111540547572414_1386506992655751264_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=101&ig_cache_key=Mjc3NTcyNzkwODU4MDUwMjE0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=nQ1UnOpj_dwQ7kNvwHFPKIx&_nc_oc=AdpzaJyfd3-E1JYLmp6Ej-4i80U3px9K1xlGcb4gjAeY0qdE-UHYRzXzwfqKpMvTSsw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=DTBamF9LDrLNH9s2jqREXg&_nc_ss=7a32e&oh=00_AfwVKveHlVk-TiqMRwUUKXYkaRR0fkHvw2Q4_j70yfhq9A&oe=69C63DAA', title: 'Signature Work', category: 'Flagstone' },
  { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/623657542_18106801906754722_4733006900434564484_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=105&ig_cache_key=Mjc2MjgxMTM3NTM0MzMyNzExNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=fmPeHCwUd5QQ7kNvwFKQa2d&_nc_oc=AdrS9ymi4ugQi_GcCri5DZ5HI2GrUadOBy0Nt7pG4j4jfJUx0dsvrKCxD09keUGy79w&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=DTBamF9LDrLNH9s2jqREXg&_nc_ss=7a32e&oh=00_Afy83_mmmow7NKWjGuEaNuGIg47XezmRI93-QL6VqVw5IA&oe=69C63C9C', title: 'Refined Details', category: 'Marble' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/623818184_18026378819606168_3374517043415503908_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=100&ig_cache_key=Mjc0NjAwODY2OTEzOTE3NzQ2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=n1DyrTSQUrsQ7kNvwEeqCby&_nc_oc=AdpZgbQJc66IiXz0H5YndPNSUnJ4vhmMQleoT8ftClUZ_Q82L8RPJ8l4Sbvu0KpX_aM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=DTBamF9LDrLNH9s2jqREXg&_nc_ss=7a32e&oh=00_AfzUeWyEYUHunnKp5fb0mObG0O96-cvsB-stETfnEzrX9w&oe=69C66C68', title: 'Architectural Feature', category: 'Tile' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/649339142_18083964143189346_3645392671927257162_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=102&ig_cache_key=MjU4ODkwNjI0NzQyNTQ4MTUyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=CJt6K8l6ixcQ7kNvwEMzg81&_nc_oc=AdrI3wJTxlPbR-TGXQtQcuU6s1cd7kGCP8DyCZjVBt-dxugOGoOgm33PvUAMLarKSYo&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=DTBamF9LDrLNH9s2jqREXg&_nc_ss=7a32e&oh=00_AfwdEjBG4ugYfSNZ8f1ORydy4No-Y6iigviewsR69V9wmw&oe=69C66076', title: 'Master Craftsmanship', category: 'Hardscaping' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/619497179_18171064087347012_447016296514031739_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MjA5MDIzNzUzNjc1NjkzMjQwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=DWC7yMr2w0oQ7kNvwERta0P&_nc_oc=AdqdzyzGoIbJbdvkybIQn68q4NuSm4fVMRRkXMgtU1U1hKNPm9iCZJECJCW5wB5ShNU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=efFKtfwa8DfSFJVpN_0wzw&_nc_ss=7a32e&oh=00_AfxCur8VKbDll8F0HOAWTdP9qic2LrdtS0GXbNhHK-YqFA&oe=69C660F4', title: 'Timeless Elegance', category: 'Marble' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/639894724_18558910327001882_4216057474462653223_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MjEyMjEyNzE4NTQ3NzYxMDM3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=PGtVoopKbFUQ7kNvwFymFSL&_nc_oc=AdpK4IDD1tx_m8H9pAi7iD-ZrJjeyJ9OOudioBYe3JhQ7RPxV_ZfpyGfXPmprsR6cgE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=DTBamF9LDrLNH9s2jqREXg&_nc_ss=7a32e&oh=00_Afy_2o5VwP1fRb-lnWmPMyQ1qdI_8vPUFqskRNb5XenBQA&oe=69C6529A', title: 'Seamless Integration', category: 'Tile' },
  { img: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/624169825_18345694513239241_2316892734443706555_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MjA4NTE2NzUzNDk4NzA1NjMzMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=lllqUUog0UoQ7kNvwH-fh5M&_nc_oc=Adol5gcOfKcBnmxH98-p1laKpdVKCp0Gx1O5aUfbJK_TtRfV_tDaPAHJD3YLVsIq-Is&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=efFKtfwa8DfSFJVpN_0wzw&_nc_ss=7a32e&oh=00_Afy0tF4WyI6RuHyLQZmjqZHb4CRfoTX8uuqJV2VcH-S6gQ&oe=69C64D5F', title: 'Exquisite Pattern', category: 'Flagstone' },
  { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/641302028_18558422857006121_1251833497854371929_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MjA4NTE2ODE1MDE0MDU3MzQ4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=oqSxEC7_SnwQ7kNvwGvXyMq&_nc_oc=Adp0r_Dv61o6eloNEVRexHzp4I-O1nnF3ncr8OBbfmQ0lBCEZsTCK9InD9ySTR3UTqY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=efFKtfwa8DfSFJVpN_0wzw&_nc_ss=7a32e&oh=00_Afx7r0KtPRynsNkGVw5d9nIAOBipv3gZ0XQ9YYbdF1vtXQ&oe=69C6498B', title: 'Luxury Surface', category: 'Marble' },
  { img: 'https://instagram.fdac3-1.fna.fbcdn.net/v/t51.82787-15/619263576_18177327730370390_5523349178279743452_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MjA4Mzg3ODUyNjg2MDQ2NDAyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=NFbyg_I_QuoQ7kNvwHn6XLC&_nc_oc=AdpXHVp6oS_EPrNBOS2tbuuVP98JSL2kYc4x9Lb7_kT9iFAHVTE2_5nwxeyN0OkpKZg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=efFKtfwa8DfSFJVpN_0wzw&_nc_ss=7a32e&oh=00_AfzuKcvvwTZGHmoqQKuFTbwVNuVhyizcfEf3KcVPOONB6Q&oe=69C64A80', title: 'Precision Layout', category: 'Tile' }
];

export default function Projects() {
  return (
    <div className="bg-stone-50 pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-brand-blue">
            Selected <span className="italic text-brand-gold">Works</span>
          </h1>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={fadeUp} className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-brand-gold text-xs tracking-widest uppercase mb-2">{project.category}</p>
                <h3 className="text-white text-2xl font-serif">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
