const dseVocab = [
  {
    word: "Snippet",
    definition: "小片段 / 摘錄 (A small piece or brief extract of something)",
    
  },
  {
    word: "Antagonist",
    definition: "反面角色 / 對手 (A person who actively opposes or is hostile to someone; an adversary)",
    
  },
  {
    word: "Overkill",
    definition: "過頭 / 過度 (Excessive use, treatment, or action; more than is needed)",
    
  },
  {
    word: "Flesh-out",
    definition: "充實 / 詳加闡述 (To add more details to something to make it more complete)",
    
  },
  {
    word: "Obstacle",
    definition: "障礙 / 阻礙 (A thing that blocks one's way or prevents or hinders progress)",
    
  },

  {
    word: "Excruciating",
    definition: "極其痛苦的 / 極其無趣的 (Intensely painful or extremely boring/unpleasant)",
    
  },
  {
    word: "Pinnacle",
    definition: "巔峰 / 極點 (The most successful point; the culmination)",
    
  },
  {
    word: "Hazard",
    definition: "危險 / 隱患 (A danger or risk)",
    
  },
  {
    word: "Independently",
    definition: "獨立地 (Without outside help; on one's own)",
    
  },
  {
    word: "Inspirational",
    definition: "啟發性的 / 勵志的 (Providing or showing creative or spiritual inspiration)",
    
  },
  {
    word: "Outdated",
    definition: "過時的 / 落伍的 (Old-fashioned or no longer useful/valid)",
    
  },
  {
    word: "Commotion",
    definition: "騷動 / 混難 (A state of confused and noisy disturbance)",
    
  },
  {
    word: "Escalate",
    definition: "升級 / 惡化 (Become or cause to become more intense or serious)",
    
  },
  {
    word: "Dignified",
    definition: "尊嚴的 / 莊重的 (Having or showing a composed or serious manner that is worthy of respect)",
    
  },
  {
    word: "Familiarise",
    definition: "使熟悉 / 習慣 (To give someone/something knowledge or understanding of something)",
    
  },
  {
    word: "Stakeholder",
    definition: "持份者 / 利益相關者 (A person or group with an interest or concern in something)",
    
  },
  {
    word: "Clipped",
    definition: "簡短乾脆的 (Of speech: having short, sharp vowel sounds; concise)",
    
  },
  {
    word: "Wry",
    definition: "啼笑皆非的 / 諷刺的 (Using or expressing dry, especially mocking, humor)",
    
  },
  {
    word: "Endure",
    definition: "忍受 / 忍耐 (To suffer something painful or difficult patiently)",
    
  },
  {
    word: "Chide",
    definition: "責怪 / 呵斥 (To scold or rebuke)",
    
  },
  {
    word: "Ornery",
    definition: "脾氣壞的 / 頑固的 (Bad-tempered and combative; stubborn)",
    
  },
  {
    word: "Contentious",
    definition: "有爭議的 / 引起爭吵的 (Causing or likely to cause an argument; controversial)",
    
  },
  {
    word: "Negligent",
    definition: "疏忽的 / 失職的 (Failing to take proper care in doing something)",
    
  },
  {
    word: "Chastened",
    definition: "感到懊悔的 (To feel humble or restrained after being corrected or punished)",
    
  },
  {
    word: "Unyielding",
    definition: "不屈的 / 堅硬的 (Not giving way to pressure; hard or inflexible)",
    
  },
  {
    word: "Seething",
    definition: "強壓怒火的 (Filled with intense but unexpressed anger)",
    
  },
  {
    word: "Bolster",
    definition: "支撐 / 改善 (To support or strengthen)",
    
  },
  {
    word: "Arcane",
    definition: "神秘的 / 晦澀難懂的 (Understood by few; mysterious or secret)",
    
  },

  {
    word: "In shreds",
    definition: "支離破碎 / 蕩然無存 (In a state of being very badly damaged or destroyed)",
    
  },
  {
    word: "Reprieve",
    definition: "暫緩 / 喘息 (A temporary escape from an undesirable fate or misfortune)",
    
  },
  {
    word: "Collated",
    definition: "整理 / 核對 (Collected and combined in proper order for comparison)",
    
  },
  {
    word: "Prevalent",
    
    definition: "普及的 / 盛行的 (Widespread in a particular area or at a particular time)"
  },
  {
    word: "Optimistic",
    definition: "樂觀的 (Hopeful and confident about the future)",
    
  },
  {
    word: "Indispensable",
    definition: "不可或缺的 (Absolutely necessary; essential)",
    
  },
  {
    word: "Consensus",
    definition: "共識 (A general agreement between a group of people)",
    
  },
  {
    word: "Ubiquity",
    definition: "無處不在 (The state of being everywhere at once; omnipresence)",
    
  },
  {
    word: "Autonomous",
    definition: "自動駕駛 / 自主 (Having the freedom or power to govern or control itself)",
    
  },
  {
    word: "Intervention",
    definition: "干預 / 介入 (Action taken to intentionally become involved in a difficult situation)",
    
  },

  {
    word: "Reprieve",
    definition: "暫緩 / 緩解 (A temporary relief from pain or trouble)",
    
  },
  {
    word: "Relic",
    definition: "遺跡 / 過時的事物 (An object, custom, or belief that has survived from the past)",
    
  },
  {
    word: "Heyday",
    definition: "全盛時期 (The period of a person's or thing's greatest success, popularity, or vigour)",
    
  },
  {
    word: "Mangled",
    definition: "損壞 / 撕裂 (Severely mutilated, disfigured, or damaged by cutting, tearing, or crushing)",
    
  },
  {
    word: "Appreciated",
    definition: "欣賞 / 重視 (Recognised the full worth of something)",
    
  },
  {
    word: "Safeguards",
    definition: "保護措施 / 預防措施 (Measures taken to protect someone or something or to prevent something undesirable)",
    
  },
  {
    word: "Meticulously",
    definition: "精心 / 細緻地 (In a way that shows great attention to detail; very thoroughly)",
    
  },
  {
    word: "Ubiquity",
    definition: "無處不在 (The state or capacity of being everywhere, especially at the same time; omnipresence)",
    
  },
  {
    word: "Ethical",
    definition: "倫理的 / 道德的 (Relating to moral principles or the branch of knowledge concerned with these)",
    
  },

  {
    word: "Saberteur",
    definition: "破壞者 (A person who deliberately destroys or damages something)",
    
  },
  {
    word: "Captivated",
    definition: "著迷 / 吸引 (Attract and hold the interest and attention of; charm)",
    
  },
  {
    word: "Ailing",
    definition: "衰落的 / 生病的 (In poor health; experiencing difficulty or decline)",
    
  },
  {
    word: "Portfolio",
    definition: "組合 / 職涯組合 (A range of investments, works, or in this context, a career consisting of various roles)",
    
  },
  {
    word: "Disbelieving",
    definition: "懷疑的 / 不相信的 (Feeling or showing that you do not believe something is true)",
    
  },
  {
    word: "Ingrained",
    definition: "根深蒂固的 (Fixed firmly or deeply in a person's mind or habit)",
    
  },
  {
    word: "Patronised",
    definition: "感到被輕視 / 屈尊俯就 (Treated with an apparent kindness which betrays a feeling of superiority)",
    
  },

  {
    word: "Robust",
    definition: "穩健的 / 強而有力的 (Strong and healthy; vigorous)",
    
  },
  {
    word: "Undermines",
    definition: "破壞 / 削弱 (Lessen the effectiveness, power, or ability of, especially gradually)",
    
  },

  {
    word: "Proverbially",
    definition: "眾所周知地 (Well known, typically as used in a proverb or idiom)",
    
  },
  {
    word: "Predicament",
    definition: "困境 / 窘境 (A difficult, unpleasant, or embarrassing situation)",
    
  },
  {
    word: "Meticulous",
    definition: "細緻的 / 嚴謹的 (Showing great attention to detail; very careful and precise)",
    
  },
  {
    word: "Obliterated",
    definition: "摧毀 / 塗抹 (Destroyed utterly; wiped out)",
    
  },
  {
    word: "Ubiquity",
    definition: "無處不在 (The state of being everywhere at once)",
    
  },
  {
    word: "Indispensable",
    definition: "不可或缺的 (Absolutely necessary)",
    
  },
  {
    word: "Prejudices",
    definition: "偏見 (Preconceived opinion that is not based on reason or actual experience)",
    
  },
  {
    word: "Consensus",
    definition: "共識 (A general agreement)",
    
  },
  {
    word: "Regulatory",
    definition: "監管的 (Relating to the management of complex systems according to a set of rules)",
    
  },
  {
    word: "Intervention",
    definition: "干預 (Action taken to improve a situation or influence an outcome)",
    
  },
 
  {
    word: "Relocate",
    definition: "搬遷 (To move to a new place to live or work)",
    
  },

  {
    word: "Flock",
    definition: "蜂擁而至 (To gather or move in a large group)",
    
  },
  {
    word: "Resemblance",
    definition: "相似之處 (The state of being alike or similar)",
    
  },
  {
    word: "Moreish",
    definition: "讓人想再吃的 (Of food, having a very pleasant taste and making you want more)",
    
  },
  {
    word: "Fabulous",
    definition: "極好的 (Extraordinarily good or wonderful)",
    
  },
  {
    word: "Antidote",
    definition: "解毒劑、對策 (Something that corrects or improves a bad situation)",
    
  },
  {
    word: "Multinational",
    definition: "跨國的 (Involving several nations or companies operating in several countries)",
    
  },
  {
    word: "Disdain",
    definition: "蔑視 (The feeling that someone or something is unworthy of consideration)",
    
  },
  {
    word: "Exaggeration",
    definition: "誇張 (A statement that represents something as better or worse than it is)",
    
  },
  {
    word: "Relevant",
    definition: "相關的、有意義的 (Closely connected or appropriate to the matter at hand)",
    
  },
  {
    word: "Preservative",
    definition: "防腐劑 (A substance used to preserve food or other materials)",
    
  },
  {
    word: "Convenience",
    definition: "便利 (The state of being able to proceed with little effort)",
    
  },
  {
    word: "Lackluster",
    definition: "乏善可陳的 (Lacking in vitality, force, or conviction; uninspired)",
    
  },
  {
    word: "Sustainability",
    definition: "持續性、永續性 (The ability to be maintained at a certain rate or level)",
    
  },
  {
    word: "Clout",
    definition: "影響力 (Influence or power, especially in politics or business)",
    
  },
  {
    word: "Consortium",
    definition: "財團、聯合企業 (An association, typically of several business companies)",
    
  },
  {
    word: "Identify",
    definition: "識別、確認 (Establish or indicate who or what someone or something is)",
    
  },
  {
    word: "Vertical",
    definition: "垂直的 (At right angles to a horizontal plane; top to bottom)",
    
  },
  {
    word: "Stewardship",
    definition: "管理、負責任的組織 (The job of supervising or taking care of something)",
    
  },
  {
    word: "Innovation",
    definition: "創新 (The action or process of innovating; a new method or idea)",
    
  },
  {
    word: "Lively",
    definition: "活潑的、充滿生氣的 (Full of life and energy; active and outgoing)",
    
  },
  {
    word: "Welcoming",
    definition: "親切的、歡迎的 (Behaving in a polite or friendly way to a guest)",
    
  },
  {
    word: "Appoint",
    definition: "任命、委派 (Assign a job or role to someone)",
    
  },
  {
    word: "Circulate",
    definition: "循環、傳閱 (Pass from place to place or person to person)",
    
  },
  {
    word: "Variety",
    definition: "多樣化 (The quality or state of being different or diverse)",
    
  },
  {
    word: "Poisonous",
    definition: "有毒的 (Causing or capable of causing death or illness if ingested)",
    
  },
  {
    word: "Tolerate",
    definition: "忍受、耐受 (Allow the existence or occurrence of something)",
    
  },
  {
    word: "Immortal",
    definition: "長生的、流芳百世的 (Living forever; never dying or decaying)",
    
  },
  {
    word: "Propel",
    definition: "推進、驅使 (Drive, push, or cause to move in a particular direction)",
    
  },
  {
    word: "Culmination",
    definition: "頂點、巔峰 (The highest point of something attained after a long time)",
    
  },
  {
    word: "Celestial",
    definition: "天體的、天空的 (Relating to the sky or outer space)",
    
  },
  {
    word: "Fragile",
    definition: "脆弱的 (Easily broken or damaged)",
    
  },
  {
    word: "Habitable",
    definition: "宜居的 (Suitable or good enough to live in)",
    
  },
  {
    word: "Undertaking",
    definition: "任務、事業 (A task, project, or journey that someone has agreed to do)",
    
  },
  {
    word: "Ingenuity",
    definition: "獨創性、心靈手巧 (The quality of being clever, original, and inventive)",
    
  },
  {
    word: "Expenditure",
    definition: "支出 (The action of spending funds)",
    
  },
  {
    word: "Mimic",
    definition: "模仿 (Imitate someone or their actions/natural processes)",
    
  },
  {
    word: "Contamination",
    definition: "污染 (The action or state of making something impure by polluting)",
    
  },
  {
    word: "Indigenous",
    definition: "土著的、本地的 (Originating or occurring naturally in a particular place)",
    
  },
  {
    word: "Intrinsic",
    definition: "內在的、固有的 (Belonging naturally; essential)",
    
  },
  {
    word: "Obligation",
    definition: "義務、責任 (A course of action to which a person is morally bound)",
    
  },
  {
    word: "Endemic",
    definition: "地方性的、特有的 (Native and restricted to a certain area)",
    
  },

  {
    word: "Inaccessible",
    definition: "難以到達的 (Impossible to approach or enter)",
    
  },
  {
    word: "Arduous",
    definition: "艱巨的、費力的 (Involving or requiring strenuous effort)",
    
  },
  {
    word: "Equivalent",
    definition: "等同物、相等的 (Equal in value, function, or meaning)",
    
  },
  {
    word: "Venerable",
    definition: "莊嚴的、值得尊敬的 (Accorded a great deal of respect, especially because of age)",
    
  },
  {
    word: "Radical",
    definition: "激進的、根本的 (Relating to or affecting the fundamental nature of something)",
    
  },
  {
    word: "Dominate",
    definition: "支配、佔優勢 (Have a commanding influence on; exercise control over)",
    
  },
  {
    word: "Adaptive reuse",
    definition: "活化再利用 (The process of reusing an existing building for a new purpose)",
    
  },
  {
    word: "Authenticity",
    definition: "真實性 (The quality of being authentic or genuine)",
    
  },
  {
    word: "Patina",
    definition: "歲月的痕跡 (The impression of age on a surface)",
    
  },
  {
    word: "Inaugural",
    definition: "開幕的、首屆的 (Marking the beginning of an institution or activity)",
    
  },
  {
    word: "Handy",
    definition: "便利的、手邊的 (Convenient to handle or use; useful)",
    
  },
  {
    word: "Fellowship",
    definition: "友誼、情誼 (Friendly association with people who share interests)",
    
  },
  {
    word: "Unspoken",
    definition: "默契的、未說出口的 (Not expressed in speech; tacit)",
    
  },
  {
    word: "Urbanisation",
    definition: "城市化 (The process of making an area more urban)",
    
  },
  {
    word: "Corridor",
    definition: "走廊 (A long passage in a building)",
    
  },
  {
    word: "Bustling",
    definition: "繁忙的、熙熙攘攘的 (Full of energetic and noisy activity)",
    
  },
  {
    word: "Unfeasible",
    definition: "不可行的 (Not practical or possible to be attained)",
    
  },
  {
    word: "Restrictions",
    definition: "限制 (A limiting condition or measure)",
    
  },
  {
    word: "Niche",
    definition: "小眾的、合適的位置 (A specialized segment of the market)",
    
  },
  {
    word: "Collective",
    definition: "集體的 (Done by people acting as a group)",
    
  },
  {
    word: "Agony uncle",
    definition: "答問專欄作家 (A man who gives advice to people in a magazine or newspaper)",
    
  },
  {
    word: "Tough love",
    definition: "嚴厲的愛 (Promotion of welfare by enforcing certain constraints)",
    
  },
  {
    word: "Vocation",
    definition: "天職、職業 (A strong feeling of suitability for a career)",
    
  },
  {
    word: "Tongue-lashing",
    definition: "斥責、痛罵 (A severe scolding or reprimand)",
    
  },
  {
    word: "Whingeing",
    definition: "抱怨、嘀咕 (Complaining in an annoying way)",
    
  },
  {
    word: "Bereavement",
    definition: "喪親之痛 (Deprivation of a loved one, especially due to death)",
    
  },
  {
    word: "Pitfalls",
    definition: "陷阱、隱憂 (A hidden or unsuspected danger or difficulty)",
    
  },
  {
    word: "Banal",
    definition: "陳腐的、平庸的 (So lacking in originality as to be obvious and boring)",
    
  },
  {
    word: "Springboard",
    definition: "跳板、出發點 (Something that provides an opportunity to achieve something)",
    
  },
  {
    word: "Self-righteous",
    definition: "自以為是的 (Characterized by a certainty that one is morally superior)",
    
  },
  {
    word: "Anticipation",
    definition: "期待、預期 (The action of expecting something)",
    
  },
  {
    word: "Trepidation",
    definition: "恐懼、惶恐 (A feeling of fear or anxiety about what may happen)",
    
  },
  {
    word: "Persevere",
    definition: "堅持不懈 (Continue in a course of action even in difficulty)",
    
  },
  {
    word: "Fruitless",
    definition: "徒勞的、無結果的 (Failing to achieve desired results; unproductive)",
    
  },
  {
    word: "Distinguish",
    definition: "區分、辨別 (Recognize or treat as different)",
    
  },
  {
    word: "Overshadow",
    definition: "遮蓋、使失色 (Appear much more prominent or important than)",
    
  },
  {
    word: "Implementation",
    definition: "實施、執行 (The process of putting a decision or plan into effect)",
    
  },
  {
    word: "Reactionary",
    definition: "保守的、反動的 (Opposing political or social progress or reform)",
    
  },
  {
    word: "Humbling",
    definition: "謙卑的、微小的 (Lowering someone's pride or self-importance)",
    
  },
  {
    word: "Missteps",
    definition: "失足、錯誤 (A clumsy or badly judged step; a mistake)",
    
  },
  {
    word: "Controversial",
    definition: "有爭議的 (Giving rise to public disagreement)",
    
  },
  {
    word: "Transformation",
    definition: "轉變、轉化 (A thorough or dramatic change in form or appearance)",
    
  },

  {
    word: "Unplugged",
    definition: "不受電子設備束縛的 (Disconnected from technology/electronic devices)",
    
  },
  {
    word: "Relieve",
    definition: "減輕、舒緩 (To alleviate or reduce stress/pain/anxiety)",
    
  },
  {
    word: "Terminal",
    definition: "電腦終端機 (A computer workstation or screen)",
    
  },

  {
    word: "Dusty",
    definition: "佈滿灰塵的、久被遺忘的 (Covered with dust; neglected over time)",
    
  },
  {
    word: "Refreshment",
    definition: "茶點、飲料 (Light snacks and drinks served at a gathering)",
    
  },
  {
    word: "Pastime",
    definition: "消遣、娛樂 (An activity done regularly for enjoyment)",
    
  },
  {
    word: "Catch on",
    definition: "流行起來 (To become popular or fashionable)",
    
  },
  {
    word: "Challenging",
    definition: "具挑戰性的 (Testing one's abilities; demanding effort)",
    
  },
  {
    word: "Pioneer",
    definition: "先驅、倡導者 (A person or country that is among the first to develop something)",
    
  },
  {
    word: "Prestigious",
    definition: "享有聲望的 (Having a high reputation; honored)",
    
  },
  {
    word: "Dreary",
    definition: "沉悶的、枯燥的 (Dull, bleak, or lifeless)",
    
  },
  {
    word: "Strategic",
    definition: "策略性的 (Relating to long-term plans or identifying aims)",
    
  },
  {
    word: "Utterly",
    definition: "完全地、徹底地 (Completely and without qualification)",
    
  },
  {
    word: "Satisfaction",
    definition: "滿足感 (Fulfillment of one's wishes or expectations)",
    
  },
  {
    word: "Immersed",
    definition: "沉浸於、深陷於 (Deeply involved in an activity or interest)",
    
  },
  {
    word: "Intrigued",
    definition: "感興趣的、被迷住的 (Very interested and curious about something)",
    
  },
  {
    word: "Socialising",
    definition: "社交 (Participating in social activities or meeting others)",
    
  },
  {
    word: "Vague",
    definition: "模糊的、不具體的 (Uncertain, indefinite, or unclear)",
    
  },
  {
    word: "Perspective",
    definition: "觀點、視角 (A particular attitude toward or way of regarding something)",
    
  },
  {
    word: "Initiative",
    definition: "倡議、初步行動 (A new plan or process to solve a problem)",
    
  },
  {
    word: "Stewardship",
    definition: "管理職責、守護 (The job of supervising or taking care of something)",
    
  },
  {
    word: "Mingle",
    definition: "混合、往來 (To mix or socialize with others)",
    
  },

  {
    word: "Embellished",
    definition: "裝飾、修飾 (Decorated by adding details or features)",
    
  },
  {
    word: "Spokeswoman",
    definition: "女發言人 (A woman who speaks on behalf of a group/organization)",
    
  },
  {
    word: "Appeal",
    definition: "呼籲、懇求 (To make a serious or urgent request)",
    
  },
  {
    word: "Not-for-profit",
    definition: "非牟利的 (An organization not intended to make money/profit)",
    
  },
  {
    word: "Shoe-string",
    definition: "資金極少的 (Being done on a very small amount of money)",
    
  },
  {
    word: "Positive",
    definition: "積極的、正面的 (Expressing confidence, optimism, or agreement)",
    
  },
  {
    word: "Lend a hand",
    definition: "幫忙 (To help someone with a task)",
    
  },
  {
    word: "Empower",
    definition: "使能夠、授權 (To give someone the authority or power to do something)",
    
  },
  {
    word: "Ultimate",
    definition: "最終的、終極的 (Being the best, most extreme, or final result)",
    
  },
  {
    word: "Provocative",
    definition: "引發爭議的、挑釁的 (Causing a strong reaction, especially deliberately)",
    
  },
  {
    word: "Excerpt",
    definition: "摘錄、節選 (A short extract from a piece of writing/film)",
    
  },
  {
    word: "Relentless",
    definition: "持續嚴厲的、不懈的 (Oppressively constant; never-ending severity)",
    
  },
  {
    word: "Poise",
    definition: "泰然自若、優雅 (Graceful and elegant bearing or composure)",
    
  },
  {
    word: "Cautionary",
    definition: "警示的 (Serving as a warning)",
    
  },
  {
    word: "Controversy",
    definition: "爭議 (Disagreement, typically public and heated)",
    
  },
  {
    word: "Extracurricular",
    definition: "課外的 (Activities pursued in addition to the normal school course)",
    
  },
  {
    word: "Dynamic",
    definition: "有活力的、動態的 (Characterized by constant change, activity, or progress)",
    
  },
  {
    word: "Underclass",
    definition: "底層階級 (The lowest social stratum in a community)",
    
  },
  {
    word: "Flummoxed",
    definition: "困惑的 (Bewildered, perplexed, or confused)",
    
  },
  {
    word: "Authoritarian",
    definition: "專制的、嚴厲的 (Favoring or enforcing strict obedience to authority)",
    
  },
  {
    word: "Ossified",
    definition: "僵化的、硬化的 (Ceased to develop; stagnant or rigid)",
    
  },

  {
    word: "Dazzling",
    definition: "令人眼花繚亂的 (Extremely bright, impressive, or beautiful)",
    
  },
  {
    word: "Spectacle",
    definition: "壯觀場面 (A visually striking performance or display)",
    
  },
  {
    word: "Hunched",
    definition: "彎腰低頭的 (Bending one's body forward and down)",
    
  },
  {
    word: "Celebrated",
    definition: "著名的 (Famous; well-known and praised)",
    
  },
  {
    word: "Fragments",
    definition: "碎片 (Small parts broken off from something)",
    
  },
  {
    word: "Unearthed",
    definition: "出土、挖掘 (Found or dug up from the ground)",
    
  },
  {
    word: "Sheathed",
    definition: "覆蓋、包入 (Encased in a close-fitting protective covering)",
    
  },
  {
    word: "Monochrome",
    definition: "單色的 (Consisting of or displaying images in only one color)",
    
  },
  {
    word: "Grandiose",
    definition: "宏偉的、誇大的 (Impressive and imposing in appearance or style)",
    
  },
  {
    word: "Standardized",
    definition: "標準化 (To cause things to conform to a standard)",
    
  },
  {
    word: "Somber",
    definition: "黯淡的 (Dark or dull in color or tone; gloomy)",
    
  },
  {
    word: "Crucible",
    definition: "嚴酷考驗 (A situation of severe trial, or a place of extreme heat)",
    
  },
  {
    word: "Serendipity",
    definition: "意外收穫 (The occurrence of events by chance in a happy way)",
    
  },
  {
    word: "Adorned",
    definition: "裝飾的 (Decorated with)",
    
  },
  {
    word: "Artistry",
    definition: "藝術技巧 (Creative skill or ability)",
    
  },
  {
    word: "Adheres",
    definition: "黏附 (Sticks fast to a surface or substance)",
    
  },
  {
    word: "Fissures",
    definition: "裂縫 (Long, narrow openings or cracks)",
    
  },
  {
    word: "Turbulent",
    definition: "動盪的 (Characterized by conflict, disorder, or confusion)",
    
  },
  {
    word: "Recognised",
    definition: "被認可的 (Acknowledged as significant or valid)",
    
  },
  {
    word: "Exposed",
    definition: "接觸 (Introduced to or made to experience something)",
    
  },
  {
    word: "Accomplishment",
    definition: "成就感 (Something that has been achieved successfully)",
    
  },
  {
    word: "Comprise",
    definition: "包含 (Consist of; be made up of)",
    
  },
  {
    word: "Aptitude",
    definition: "天資、資質 (A natural ability to do something)",
    
  },
  {
    word: "Unwittingly",
    definition: "不經意地 (Without being aware; unintentionally)",
    
  },
  {
    word: "Undesirable",
    definition: "不受歡迎的 (Not wanted or desirable; unpleasant)",
    
  },

  {
    word: "Risk-free",
    definition: "無風險的 (Involving no chance of loss or failure)",
    
  },
  {
    word: "Addictive",
    definition: "令人上癮的 (Causing or likely to cause a dependency)",
    
  },
  {
    word: "Counterproductively",
    definition: "適得其反地 (In a way that has the opposite of the desired effect)",
    
  },
  {
    word: "Oppressive",
    definition: "壓迫的 (Inflicting harsh and authoritarian treatment)",
    
  },
  {
    word: "Autonomy",
    definition: "自主權 (The right or condition of self-government)",
    
  },
  {
    word: "Conducive",
    definition: "有助於 (Making a certain situation or outcome likely or possible)",
    
  },
  {
    word: "Conform",
    definition: "遵從 (Comply with rules, standards, or laws)",
    
  },
  {
    word: "Disaffection",
    definition: "不滿、疏離 (A state of being dissatisfied with authority)",
    
  },
  {
    word: "Incongruity",
    definition: "不協調 (The state of being out of place or not in harmony)",
    
  },
  {
    word: "Admonitory",
    definition: "告誡的 (Giving or conveying a warning or reprimand)",
    
  },
  {
    word: "Equivocate",
    definition: "含糊其辭 (Use ambiguous language so as to conceal the truth)",
    
  },
  {
    word: "Feckless",
    definition: "無能的 (Lacking initiative or strength of character; irresponsible)",
    
  },
  {
    word: "Hedonism",
    definition: "享樂主義 (The pursuit of pleasure; sensual self-indulgence)",
    
  },
  {
    word: "Didactic",
    definition: "說教的 (Intended to teach, particularly in having moral instruction)",
    
  },
  {
    word: "Indictment",
    definition: "控訴 (A formal charge or accusation of a serious crime/fault)",
    
  },
  {
    word: "Outlandish",
    definition: "稀奇古怪的 (Looking or sounding bizarre or unfamiliar)",
    
  },
  {
    word: "Conduits",
    definition: "管道 (A channel for conveying something)",
    
  },
  {
    word: "Quaint",
    definition: "古雅的、過時的 (Attractively unusual or old-fashioned)",
    
  },

  {
    word: "Emerged",
    definition: "浮現、出現 (Move out of or away from something and come into view)",
    
  },
  {
    word: "Lighter",
    definition: "輕鬆的 (Feeling less worried or serious)",
    
  },

  // --- Text 2: The World Needs More Love Letters ---
  {
    word: "Exploded",
    definition: "激增、爆炸式增長 (Increased suddenly and rapidly in size or number)",
    
  },

  {
    word: "Brilliant",
    definition: "出眾的、燦爛的 (Exceptionally clever or talented)",
    
  },
  {
    word: "Scribble",
    definition: "草率地寫 (Write or draw something carelessly or hurriedly)",
    
  },
  {
    word: "Reconnect",
    definition: "重新聯繫 (Connect back together)",
    
  },

  // --- Text 3: My attempt at writing random love letters ---
  {
    word: "Touchy-feely",
    definition: "過於情感化的 (Openly or excessively expressing emotions)",
    
  },
  {
    word: "Self-conscious",
    definition: "自覺的、侷促不安的 (Feeling undue awareness of oneself, one's appearance, or one's actions)",
    
  },
  {
    word: "Cheesy",
    definition: "俗氣的 (Cheap, unpleasant, or blatantly inauthentic)",
    
  },

  {
    word: "Nailed it",
    definition: "做得好、搞定了 (To perform a task perfectly or successfully)",
    
  },
  {
    word: "Lunatic",
    definition: "瘋子 (A mentally ill person; extremely foolish)",
    
  },

  // --- Text 4: Celebrity (Stephen Fry excerpt) ---
  {
    word: "Undeserving",
    definition: "不值得的 (Not warranted or merited)",
    
  },
  {
    word: "Obsessed",
    definition: "著迷的 (Preoccupied to a disturbing extent)",
    
  },
  {
    word: "Supremacy",
    definition: "至高無上 (The state of being superior to all others)",
    
  },
  {
    word: "Delusional",
    definition: "幻想的、錯覺的 (Characterized by or holding idiosyncratic beliefs that are contradicted by reality)",
    
  },
  {
    word: "Venerate",
    definition: "崇拜、尊敬 (Regard with great respect; revere)",
    
  },
  {
    word: "Sustenance",
    definition: "養分、支持 (The maintaining of someone or something in life or existence)",
    
  },
  {
    word: "Propensity",
    definition: "傾向 (An inclination or natural tendency to behave in a particular way)",
    
  },
  {
    word: "Apoplectic",
    definition: "勃然大怒的 (Overcome with anger; extremely indignant)",
    
  },
  {
    word: "Dichotomies",
    definition: "二分法 (A division or contrast between two things that are represented as being opposed or entirely different)",
    
  },
  {
    word: "Biodiversity",
    definition: "生物多樣性 (The variety of life in the world or in a particular habitat)",
    
  },
  {
    word: "Monocultures",
    definition: "單一文化 (The cultivation of a single crop or culture in a given area)",
    
  },
  {
    word: "Idolatry",
    definition: "偶像崇拜 (Worship of idols)",
    
  },
  {
    word: "Short-circuiting",
    definition: "走捷徑 (Find a shorter/quicker way to achieve something, often by skipping important steps)",
    
  },
  {
    word: "Unmolested",
    definition: "未受干擾的 (Left alone; not interfered with)",
    
  },
  {
    word: "Futile",
    definition: "徒勞的、無用的 (Incapable of producing any useful result; pointless)",
    
  },
  {
    word: "Fatuous",
    definition: "愚蠢的 (Silly and pointless)",
    
  },
  {
    word: "Entrails",
    definition: "肝腸、內部 (A person's or animal's intestines or internal organs)",
    
  },
  {
    word: "Relish",
    definition: "享受、喜愛 (Great enjoyment)",
    
  },
  {
    word: "Fulfilment",
    definition: "成就感、滿足 (The achievement of something desired, promised, or predicted)",
    
  },
  {
    word: "Affluent",
    definition: "富裕的 (Having a great deal of money; wealthy)",
    
  },

  {
    word: "Exaggerated",
    definition: "誇大的 (Regarded or represented as larger, better, or worse than in reality)",
    
  },

  {
    word: "Authored",
    definition: "撰寫 / 編著 (To be the author of a book or report)",
    
  },
  {
    word: "Pipeline",
    definition: "在籌劃中 / 在製作中 (A process in which something is being developed or prepared)",
    
  },
  {
    word: "Mutual",
    definition: "相互的 / 彼此的 (Experienced or done by each of two or more parties toward the other)",
    
  },
  {
    word: "Oppression",
    definition: "壓迫 / 壓抑 (Prolonged cruel or unjust treatment or control)",
    
  },
  {
    word: "Manic",
    definition: "狂熱的 / 躁狂的 (Showing wild and apparently deranged excitement and energy)",
    
  },
  {
    word: "Raucous",
    definition: "喧鬧的 / 刺耳的 (Making or constituting a disturbingly harsh and loud noise)",
    
  },
  {
    word: "Stoicism",
    definition: "堅忍 / 克己 (The endurance of pain or hardship without the display of feelings)",
    
  },
  {
    word: "Inscrutable",
    definition: "高深莫測的 / 難以理解的 (Impossible to understand or interpret)",
    
  },
  {
    word: "Superficial",
    definition: "膚淺的 / 表面的 (Not thorough, deep, or complete; concerned only with the surface)",
    
  },
  {
    word: "Affluent",
    definition: "富裕的 / 豐富的 (Having a great deal of money; wealthy)",
    
  },
  {
    word: "Obsessed",
    definition: "著迷的 / 心神不寧的 (Preoccupied with or worried about something constantly)",
    
  },
  {
    word: "Cynical",
    definition: "憤世嫉俗的 / 冷嘲熱諷的 (Believing that people are motivated by self-interest)",
    
  },
  {
    word: "Influential",
    definition: "有影響力的 (Having great influence on someone or something)",
    
  },
  {
    word: "Correspondents",
    definition: "通訊員 / 特派員 (A person who reports news from a particular country or subject)",
    
  },
  {
    word: "Anonymously",
    definition: "匿名地 (In a way that prevents a person's name from being known)",
    
  },
  {
    word: "Expat",
    definition: "移居國外者 (A person who lives outside their native country)",
    
  },
  {
    word: "Canon",
    definition: "經典 / 準則 (A collection of standard works accepted as genuine)",
    
  },
  {
    word: "Indispensables",
    definition: "必不可少的人或物 (Things that are absolutely necessary)",
    
  },
  {
    word: "Multicultural",
    definition: "多元文化的 (Relating to several cultural or ethnic groups within a society)",
    
  },
  {
    word: "Contradictory",
    definition: "矛盾的 (Mutually opposed or inconsistent)",
    
  },
  {
    word: "Undermining",
    definition: "削弱 / 暗中破壞 (Lessen the effectiveness, power, or ability of)",
    
  },
  {
    word: "Depraved",
    definition: "墮落的 / 邪惡的 (Morally corrupt; wicked)",
    
  },
  {
    word: "Weary",
    definition: "疲憊的 / 厭倦的 (Feeling or showing tiredness from excessive exertion)",
    
  },
  {
    word: "Sophistication",
    definition: "老練 / 精細 (The quality of having refined knowledge of the world or culture)",
    
  },
  {
    word: "Negotiate",
    definition: "順利通過 / 協商 (To find a way through a difficult path or system)",
    
  },
  {
    word: "Cynicism",
    definition: "憤世嫉俗 (An inclination to believe that people are motivated by self-interest)",
    
  },
  {
    word: "Debunkers",
    definition: "揭穿者 / 暴露者 (People who expose the falseness of a myth or belief)",
    
  },
  {
    word: "Capacity",
    definition: "能力 / 容量 (The ability or power to do or understand something)",
    
  },
  {
    word: "Prowess",
    definition: "非凡的技能 / 造詣 (Skill or expertise in a particular activity or field)",
    
  },
  {
    word: "Exuberant",
    definition: "精力充沛的 / 熱情洋溢的 (Filled with lively energy and excitement)",
    
  },
  {
    word: "Fetishizing",
    definition: "盲目崇拜 (To have an excessive or irrational obsession with something)",
    
  },
  {
    word: "Depleting",
    definition: "耗盡 / 使枯竭 (Using up the supply or resources of)",
    
  },
  {
    word: "Absorption",
    definition: "專注 / 吸收 (The state of being very interested in and giving all attention to something)",
    
  },
  {
    word: "Fractured",
    definition: "破碎的 / 分裂的 (Broken or cracked; fragmented)",
    
  },
  {
    word: "Pander",
    definition: "迎合 / 討好 (To provide what someone wants even if it is not proper)",
    
  },
  {
    word: "Instigate",
    definition: "發起 / 煽動 (To cause an event or situation to happen or begin)",
    
  },
  {
    word: "Pragmatic",
    definition: "務實的 / 實用的 (Dealing with things realistically based on practical considerations)",
    
  },
  {
    word: "Prospect",
    definition: "前景 / 展望 (The possibility or likelihood of a future event occurring)",
    
  },
  {
    word: "Tolerance",
    definition: "寬容 / 忍耐 (The willingness to tolerate opinions or behavior one disagrees with)",
    
  },

  {
    word: "Misfortune",
    definition: "不幸 / 厄運 (Bad luck or an unfortunate event)",
    
  },
  {
    word: "Symbolizes",
    definition: "象徵 (To be a symbol of something)",
    
  },
  {
    word: "Counteract",
    definition: "對抗 / 抵消 (To act against something in order to reduce its force)",
    
  },
  {
    word: "Virtually",
    definition: "幾乎 / 事實上 (Nearly; almost entirely)",
    
  },
  {
    word: "Benign",
    definition: "良性的 / 和善的 (Kind and gentle; not harmful)",
    
  },
  {
    word: "Destiny",
    definition: "命運 (The events that will necessarily happen to a person in the future)",
    
  },
  {
    word: "Consistently",
    definition: "一貫地 / 始終如一地 (In every case or every time; reliably)",
    
  },
  {
    word: "Disrupts",
    definition: "中斷 / 擾亂 (To interrupt an event, activity, or process by causing a disturbance)",
    
  },
  {
    word: "Insight",
    definition: "洞察力 / 見解 (A deep understanding of a person or thing)",
    
  },
  {
    word: "Achievement",
    definition: "成就 (A thing done successfully, typically by effort, courage, or skill)",
    
  },
  {
    word: "Counterfactual",
    definition: "反事實的 (Relating to what has not happened or is not the case)",
    
  },
  {
    word: "Radically",
    definition: "根本地 / 徹底地 (In a thorough or fundamental way)",
    
  },
  {
    word: "Debunking",
    definition: "揭穿 (Exposing the falseness of a myth, idea, or belief)",
    
  },
  {
    word: "Scepticism",
    definition: "懷疑態度 (A skeptical attitude; doubt as to the truth of something)",
    
  },
  {
    word: "Alfresco",
    definition: "戶外的 (In the open air)",
    
  },
  {
    word: "Implement",
    definition: "實施 / 執行 (To put a decision, plan, or agreement into effect)",
    
  },
  {
    word: "Adverse",
    definition: "不利的 / 有害的 (Preventing success or development; harmful)",
    
  },
  {
    word: "Coexisting",
    definition: "共存 (Exist at the same time or in the same place)",
    
  },
  {
    word: "Congestion",
    definition: "擁擠 / 堵塞 (The state of being extremely full or blocked, especially with traffic)",
    
  },
  {
    word: "Feasibility",
    definition: "可行性 (The state or degree of being easily or conveniently done)",
    
  },
  {
    word: "Integral",
    definition: "不可或缺的 / 構成整體的 (Necessary to make a whole complete; essential)",
    
  },
  {
    word: "Decline",
    definition: "下降 / 衰落 (A gradual and continuous loss of strength, numbers, or quality)",
    
  },
  {
    word: "Controversial",
    definition: "有爭議的 (Giving rise or likely to give rise to public disagreement)",
    
  },
  {
    word: "Exaggerating",
    definition: "誇大 (Representing something as being larger, better, or worse than it really is)",
    
  },
  {
    word: "Entrepreneurs",
    definition: "企業家 (A person who organizes and operates a business)",
    
  },
  {
    word: "Attest",
    definition: "證明 / 證實 (Provide or serve as clear evidence of)",
    
  },
  {
    word: "Adopters",
    definition: "採用者 (A person who starts using a product or technology as soon as it becomes available)",
    
  },
  {
    word: "Ferocious",
    definition: "兇猛的 / 激烈的 (Savagely fierce, cruel, or violent)",
    
  },
  {
    word: "Regulators",
    definition: "監管機構 (A person or body that supervises a particular industry)",
    
  },
  {
    word: "Inclement",
    definition: "惡劣的 (氣候) (Of the weather: unpleasantly cold or wet)",
    
  },
  {
    word: "Thrived",
    definition: "繁榮 / 茁壯成長 (To grow or develop well or vigorously)",
    
  },
  {
    word: "Reprehensible",
    definition: "應受譴責的 (Deserving censure or condemnation)",
    
  },
  {
    word: "Cannibalizing",
    definition: "蠶食 (To reduce the sales of a product by introducing a similar new product)",
    
  },
  {
    word: "Redundant",
    definition: "多餘的 (Not or no longer needed or useful; superfluous)",
    
  },
  {
    word: "Tangible",
    definition: "有形的 / 切實的 (Perceptible by touch; clear and definite)",
    
  },
  {
    word: "Suspicious",
    definition: "可疑的 (Having or showing a cautious distrust of someone or something)",
    
  },
  {
    word: "Intrepid",
    definition: "無畏的 / 勇敢的 (Fearless; adventurous)",
    
  },
  {
    word: "Wrangling",
    definition: "爭論 (Engagement in a long, complicated dispute or argument)",
    
  },
  {
    word: "Misguided",
    definition: "被誤導的 / 錯誤的 (Having or showing faulty judgment or reasoning)",
    
  },
  {
    word: "Gastronomic",
    definition: "美食的 / 烹飪學的 (Relating to the practice of choosing, cooking, and eating good food)",
    
  },

  {
    word: "Ineffectual",
    definition: "無能的 / 無效果的 (Not producing any or the desired effect)",
    
  },
  {
    word: "Plummeted",
    definition: "暴跌 / 急降 (Fall or drop straight down at high speed)",
    
  },
  {
    word: "Indoctrinated",
    definition: "灌輸 (教導某人無批判地接受一套信念) (Taught to accept a set of beliefs uncritically)",
    
  },
  {
    word: "Omission",
    definition: "遺漏 / 疏忽 (Someone or something that has been left out or excluded)",
    
  },
  {
    word: "Stagnated",
    definition: "停滯 (Cease to develop; become inactive or dull)",
    
  },
  {
    word: "Fervor",
    definition: "熱情 / 熱烈 (Intense and passionate feeling)",
    
  },
  {
    word: "Rationale",
    definition: "根本原因 / 邏輯依據 (A set of reasons or a logical basis for a course of action)",
    
  },
  {
    word: "Eco-conscious",
    definition: "具環保意識的 (Showing concern for the environment)",
    
  },
  {
    word: "Nauseating",
    definition: "令人嘔心的 (Causing a feeling of nausea or disgust)",
    
  },
  {
    word: "Virtually",
    definition: "幾乎 / 事實上 (Nearly; almost entirely)",
    
  },
  {
    word: "Milestones",
    definition: "里程碑 (An action or event marking a significant change or stage in development)",
    
  },
  {
    word: "Reluctance",
    definition: "勉強 / 不情願 (Unwillingness or disinclination to do something)",
    
  },
  {
    word: "Surge",
    definition: "激增 (A sudden powerful forward or upward movement)",
    
  },
  {
    word: "Anomaly",
    definition: "異常事物 (Something that deviates from what is standard, normal, or expected)",
    
  },
  {
    word: "Postponing",
    definition: "延遲 (Cause or arrange for something to take place at a time later than first scheduled)",
    
  },
  {
    word: "Diverse",
    definition: "多樣化的 / 不同種類的 (Showing a great deal of variety; very different)",
    
  },
  {
    word: "Liberal",
    definition: "思想開放的 / 自由的 (Willing to respect or accept behavior or opinions different from one's own)",
    
  },
  {
    word: "Predecessors",
    definition: "前輩 / 前任 (A person who held a job or office before the current holder)",
    
  },
  {
    word: "NEETs",
    definition: "隱蔽青年 / 尼特族 (People not in education, employment, or training)",
    
  },
  {
    word: "Megacities",
    definition: "特大城市 (A very large city, typically one with a population of over ten million)",
    
  },
  {
    word: "Yearn",
    definition: "渴望 (Have an intense feeling of longing for something)",
    
  },
  {
    word: "Immoral",
    definition: "不道德的 (Not conforming to accepted standards of morality)",
    
  },
  {
    word: "Coining",
    definition: "創造 (新詞語) (Inventing a new word or phrase)",
    
  },
  {
    word: "Complementary",
    definition: "互補的 (Combining in such a way as to enhance or emphasize the qualities of each other)",
    
  },
  {
    word: "Catalyst",
    definition: "催化劑 (A person or thing that precipitates an event)",
    
  },
  {
    word: "Ubiquitous",
    definition: "無處不在的 (Present, appearing, or found everywhere)",
    
  },
  {
    word: "Bandwagon",
    definition: "浪潮 / 時尚 (A particular activity or cause that has suddenly become fashionable or popular)",
    
  },
  {
    word: "Overt",
    definition: "公開的 / 明顯的 (Done or shown openly; not secret or hidden)",
    
  },
  {
    word: "Flaunt",
    definition: "炫耀 / 誇示 (Display something ostentatiously, especially in order to provoke envy or admiration)",
    
  },
  {
    word: "Exuberant",
    definition: "活力充沛的 / 豐富的 (Filled with or characterized by a lively energy and excitement)",
    
  },
  {
    word: "Peer-to-peer",
    definition: "同儕間的 (Denoting a relationship or system where individuals have equal status)",
    
  },
  {
    word: "Ladder",
    definition: "階梯 (職位晉升途徑) (A series of stages by which progress can be made)",
    
  },
  {
    word: "E elders",
    definition: "長輩 (A person of greater age than someone else)",
    
  },
  {
    word: "Distractibility",
    definition: "易分心 (The quality of being easily distracted)",
    
  },
  {
    word: "Spans",
    definition: "跨越 / 持續 (Extend across a period of time or a physical distance)",
    
  },
  {
    word: "Truism",
    definition: "自明之理 / 老生常談 (A statement that is obviously true and says nothing new or interesting)",
    
  },

  {
    word: "Prosperity",
    definition: "繁榮 (The state of being prosperous)",
    
  },

  {
    word: "Complimentary",
    definition: "免費的 (Given free of charge)",
    
  },
  {
    word: "Gazillion",
    definition: "極大量 (An unspecified very large number)",
    
  },

  {
    word: "Peripheral",
    definition: "周邊的 / 次要的 (Relating to the edge or search of something)",
    
  },
  {
    word: "Potent",
    definition: "強有力的 / 有效的 (Having great power, influence, or effect)",
    
  },
  {
    word: "Innocuous",
    definition: "無害的 (Not harmful or offensive)",
    
  },
  {
    word: "Neutralise",
    definition: "抵消 / 使中和 (Render something ineffective or harmless by applying an opposite force)",
    
  },
  {
    word: "Melancholic",
    definition: "憂鬱的 (Feeling or expressing pensive sadness)",
    
  },

  {
    word: "Immersive",
    definition: "沉浸式的 (Providing information or images in a way that makes the user feel completely involved)",
    
  },

  {
    word: "Darwinian",
    definition: "達爾文式的 (適者生存的) (Relating to the theory of evolution by natural selection)",
    
  },
  {
    word: "Manipulating",
    definition: "操縱 / 控制 (Handle or control a tool, mechanism, or person in a skillful manner)",
    
  },
  {
    word: "Pollination",
    definition: "授粉 (The transfer of pollen to a plant to allow fertilization)",
    
  },
  {
    word: "Moral",
    definition: "寓意 / 道德教訓 (A lesson that can be derived from a story or experience)",
    
  },

  {
    word: "Critters",
    definition: "小生物 (A living creature, especially an animal)",
    
  },
  {
    word: "Diversity",
    definition: "多樣性 (The state of being diverse; variety)",
    
  },

  {
    word: "Millennium",
    definition: "一千年 (A period of a thousand years)",
    
  },
  {
    word: "Fragrance",
    definition: "芬芳 / 香氣 (A pleasant, sweet smell)",
    
  },
  {
    word: "Intruder",
    definition: "入侵者 (A person or thing that becomes involved in a place or situation where they are not wanted)",
    
  },
  {
    word: "Lancets",
    definition: "手術小刀 / 刺針 (A small, broad, two-edged surgical knife or tool for pricking)",
    
  },
 
  {
    word: "Apiarist",
    definition: "養蜂人 (A person who keeps bees)",
    
  },

  {
    word: "Aggressive",
    definition: "具侵略性的 / 好鬥的 (Ready or likely to attack or confront)",
    
  },
  {
    word: "Bumper",
    definition: "特大的 / 豐收的 (Exceptionally large, fine, or successful)",
    
  },
  {
    word: "Berserk",
    definition: "狂暴的 / 瘋狂的 (Out of control with anger or excitement; wild or frenzied)",
    
  },
  {
    word: "Persistence",
    definition: "毅力 / 持續 (Firm or obstinate continuance in a course of action in spite of difficulty)",
    
  },
  {
    word: "Vulnerable",
    definition: "易受傷的 / 脆弱的 (Susceptible to physical or emotional attack or harm)",
    
  },
  {
    word: "Claustrophobic",
    definition: "幽閉恐懼的 (Inducing a fear of being in closed or small spaces)",
    
  },
  {
    word: "Undermine",
    definition: "削弱 / 暗中破壞 (Lessen the effectiveness, power, or ability of, especially gradually)",
    
  },

  {
    word: "Exhausting",
    definition: "筋疲力竭的 (Making one feel very tired; very tiring)",
    
  },
  {
    word: "Facilitate",
    definition: "促進 / 便利 (Make an action or process easy or easier)",
    
  },
  {
    word: "Faculties",
    definition: "能力 / 官能 (An inherent mental or physical power)",
    
  },

  {
    word: "Orchard",
    definition: "果園 (A piece of land planted with fruit trees)",
    
  },

  {
    word: "Impeccably",
    definition: "完美地 / 無懈可擊地 (In accordance with the highest standards; faultlessly)",
    
  },
  {
    word: "Juggle",
    definition: "同時應付 / 盡力操縱 (Manage several activities or responsibilities at the same time)",
    
  },
  {
    word: "Strategy",
    definition: "策略 (A plan of action designed to achieve a long-term or overall aim)",
    
  },
  {
    word: "Improvisation",
    definition: "即興創作 (The action of improvising; creating something without preparation)",
    
  },
  {
    word: "Ambiguity",
    definition: "模稜兩可 / 不明確性 (The quality of being open to more than one interpretation; inexactness)",
    
  },
  {
    word: "Quantify",
    definition: "量化 (Express or measure the quantity of)",
    
  },

  {
    word: "Archives",
    definition: "檔案 / 文獻 (A collection of historical documents or records)",
    
  },

  {
    word: "Dysfunctional",
    definition: "失調的 / 功能失常的 (Not operating normally or properly)",
    
  },

  {
    word: "Baggage",
    definition: "包袱 / 負累 (Past experiences or long-held beliefs that can be a burden)",
    
  },

  {
    word: "Aesthetic",
    definition: "美學的 / 審美的 (Concerned with beauty or the appreciation of beauty)",
    
  },

  {
    word: "Chaos",
    definition: "混亂 (Complete disorder and confusion)",
    
  },
  {
    word: "Pendulum",
    definition: "鐘擺 (用以形容在兩個極端或趨勢之間擺動) (Used to refer to the tendency of a situation to oscillate between one extreme and another)",
    
  },
  {
    word: "Disruption",
    definition: "中斷 / 擾亂 (Disturbance or problems which interrupt an event, activity, or process)",
    
  },
  {
    word: "Ceased",
    definition: "停止 (Bring or come to an end)",
    
  },
  {
    word: "Alas",
    definition: "唉 / 可惜 (Used to express grief, pity, or regret)",
    
  },
  {
    word: "Transgressions",
    definition: "違法 / 犯罪 (An act that goes against a law, rule, or code of conduct; an offense)",
    
  },


  {
    word: "Untrammeled",
    definition: "無拘無束的 (Not deprived of freedom of action or expression; not restricted)",
    
  },

  {
    word: "Dullards",
    definition: "笨蛋 (A slow or stupid person)",
    
  },
  {
    word: "Susceptible",
    definition: "易受影響的 (Likely or liable to be influenced or harmed by a particular thing)",
    
  },
  {
    word: "Friction",
    definition: "摩擦 (The resistance that one surface or object encounters when moving over another)",
    
  },
  {
    word: "Averse",
    definition: "厭惡的 / 反對的 (Having a strong dislike of or opposition to something)",
    
  },
  {
    word: "Monologue",
    definition: "獨白 (A long speech by one actor in a play or movie, or as part of a theatrical or broadcast program)",
    
  },
  {
    word: "Revolted",
    definition: "感到噁心 / 厭惡 (Cause to feel intense self-disgust; nauseate)",
    
  },
  {
    word: "Desisted",
    definition: "停止 / 罷手 (Cease; abstain)",
    
  },
  {
    word: "Altitude",
    definition: "高度 (The height of an object or point in relation to sea level or ground level)",
    
  },
  {
    word: "Solace",
    definition: "安慰 (Comfort or consolation in a time of distress or sadness)",
    
  },
  {
    word: "Imposture",
    definition: "欺騙 / 冒充 (An instance of pretending to be someone else in order to deceive others)",
    
  },
  {
    word: "Coerced",
    definition: "被迫 / 強迫 (Persuade an unwilling person to do something by using force or threats)",
    
  },

  {
    word: "Extolling",
    definition: "讚美 / 頌揚 (Praise enthusiastically)",
    
  },




];
