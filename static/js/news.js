// declare news data
const newsData = [
    {
        id: 1,
        img: "static/assets/images/news/news1.png",
        title: "Lamine Yamal ចង់​ឈ្នះ​​​ពាន​១​ក្នុង​ចំណោម​ពីរ​នេះ​ឲ្យ​បាន​សិន​មុន​ឈាន​ដល់ Ballon d'Or",
        date: "2024-12-19 16:21",
        url: "newsDetail.html",
        description: `«​មុន​ពេល​ខ្ញុំ​អាច​ឈ្នះ​ពាន Ballon d'Or ខ្ញុំ​ចង់​ឈ្នះ​ពាន​ Champions League ជាមួយ Barcelona ឬ​ក៏​ឈ្នះ​​ពាន World Cup ជាមួយ​ប្រទេស​អេស្ប៉ាញ​របស់​ខ្ញុំ​ឲ្យ​បាន​១​សិន​»។
        នេះ​ជា​សម្ដី​របស់​ Lamine Yamal ប្រាប់​ទៅ​កាន់​កាសែត​ Marca ។
        
        Yamal គឺ​ជា​យុវជន​​ម្នាក់​ដែល​មាន​ភាព​លេចធ្លោ​ខ្លាំង​ក្រោយ​​​ពេល​​រូប​គេ​​បង្ហាញ​សមត្ថភាព​ដ៏​អស្ចារ្យ​ក្នុង​ព្រឹត្តិការណ៍ UERO 2024 ហើយ​បាន​ជួយ​អេស្ប៉ាញ​លើក​ពាន​​ធំ​ប្រាំ​ទ្វីប​​អឺរ៉ុប​មួយ​នេះ​។ មិន​ត្រឹម​ប៉ុណ្ណោះ​ពេល​នេះ​គេ​ជា​កម្លាំង​ស្នូល​មួយ​ដ៏​សំខាន់​របស់ Barcelona ក្នុង​ការ​ជួយ​ក្រុម​ឲ្យ​យក​ឈ្នះ​ទៅ​លើ​ក្រុម​ធំ​ៗ​ជា​ច្រើន​នៅ​អឺរ៉ុប​ដូច​ជា​ការ​យក​ឈ្នះ Real Madrid និង Bayern Munich ជា​​​ដើម​។
        
        គិត​ត្រឹម​ពេល​នេះ​គេ​បាន​ចូល​លេង​ឲ្យ​ក្រុម​ Barcelona ​បាន​ចំនួន​៥៤​ប្រកួត​ហើយ​ និង​រក​បាន​១០​គ្រាប់​​ថែម​ទៀ​ត​ផង​។ ចំណែក​ជា​មួយ​ជម្រើស​ជាតិ​​វិញ​គេ​បាន​ចូល​លេង​បាន​​១៧​ប្រកួត ពោល​ក៏​រក​បា​ន​៣​គ្រាប់​ផង​ដែរ​​៕`,
    },
    {
        id: 2,
        img: "static/assets/images/news/news2.png",
        title: "ប្រៀបធៀប​ Onana និង De Gea ​រដូវ​កាល​២០២៤-២០២៥​",
        date: "2025-01-01 12:47",
        url: "newsDetail.html",
        description: `Andre Onana បាន​ផ្ទេរ​មក​កាន់​ Manchester United ​កាល​ពី​ខែ​កក្កដា ឆ្នាំ​មុន ខណៈ​ដែល​ Devid De Gea ​ទើប​តែ​​រក​ក្លឹប​បាន​លេង​នៅ​រដូវ​កាល​ថ្មី​នេះ​ពោល​គឺ​គេ​បាន​ចូលរួម​ជាមួយ Fiorentina លីគ​កំពូល​របស់​អ៊ីតាលី​។ 
        គិត​មក​ដល់​ពេល​នេះ​សម្រាប់​រដូវ​២០២៤-២០២៥​​ Onana គេ​បាន​បង្ហាញ​ខ្លួន​សរុប​ចំនួន ២២​លើក ខណៈ​ដែល De Gea បាន​បង្ហាញ​ខ្លួន​១៤​លើក​ក្នុង​នោះ​បើ​ធ្វើ​ការ​ប្រៀបធៀប​​គ្នា​ហាក់​ខុស​គ្នា​តិច​តួច​ប៉ុន្តែ​បើ​មើល​ទៅ​លើ​ ភាគរយ​ បិទ​ដៃគូ​មិន​ឲ្យ​ទាត់​ចូល​​ឃើញ​ថា De Gea ល្អ​ជាង​ដាច់។

        Onana ៖ ២២​ប្រកួត​ លេង​បាន​​សរុប​១៩៨០​​នាទី ​បិទ​ Clean Sheets ចំនួន ៧​លើក,​ របូត​គ្រាប់​បាល់​សរុប​២៧​គ្រាប់,​​ សង្គ្រោះ​បាល់​ដែល​ស៊ុត​ចំ​គោលដៅ​​គ្រោះ​ថ្នាក់​​​ ៥៦​លើក, គិត​ជា​ភាគរយ​នៃ​ការ​សង្គ្រោះ​បាល់​មាន​៦៧.១០​% , សង្គ្រោះ​បាន​៥៦​លើក, បោះ​​បាល់​​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​បាន៨០៥​លើក​, បង្កើត​កំហុសឲ្យ​របូត​គ្រាប់​បាល់​ចំនួន​២លើក​។

        De Gea ៖ ១៤​ប្រកួត​លេង​បាន​១២២១​នាទី​ បិទ​ Clean Sheets បាន​ចំនួន ៧​លើក​​ដូច​គ្នា​ តែ​ចំនួន​ប្រកួត​តិច​ជាង​, មិន​បាន​បង្កើត​កំហុស​ឲ្យ​មាន​គ្រាប់​​​បាល់​ទេ​, របូត​គ្រាប់​បាល់​ចំនួន ១១​គ្រាប់​, សង្គ្រោះ​បាល់​​​ដែល​គ្រោះថ្នាក់​​ស៊ុត​​ចំ​គោលដៅ​​ ៤៤​​លើក​, គិត​ជា​ភាគរយ​សង្រ្គោះ​បាន​ ៨០​ភាគ​រយ , បោះ​បាល់​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​ ៣៦៥លើក​។
        
        ​តាម​រយៈទិន្នន័យ​នេះ​ឃើញ​ថា De Gea បិទ​ Clean Sheets បាន​ស្មើ​គ្នា​៧​លើក​​ ប៉ុន្តែ​បើ​មើល​ទៅ​ចំនួន​ប្រកួត​គឺ De Gea ចូល​លេង​បាន​តែ​១៤​ប្រកួត​ប៉ុណ្ណោះ​។ ក្នុង​នោះ​​ចំណុច​​​ល្អ​មួយ​​ទៀត​គឺ​ De Gea គ្មាន​កំហុស​​ដែល​នាំ​ឲ្យ​​របូត​គ្រាប់​បាល់​នោះ​ទេ​ ខណៈ​ការ​សង្គ្រោះ​នានា​​គឺ​ប្រហាក់​ប្រហែល​គ្នា​៕ ​​​​​​​​​​`,
    },
    {
        id: 3,
        img: "static/assets/images/news/news3.png",
        title: "Real Madrid រួចរាល់​ក្នុង​ការ​ចំណាយ​២៥​​លាន​​អឺរ៉ូ​លើ​ខ្សែ​ការពារ​ Liverpool រូប​នេះ​តែ​ក្លិប​ឆ្លើយ​បែប​នេះ​",
        date: "2025-01-03 16:21",
        url: "newsDetail.html",
        description: `Real Madrid បាន​​សម្រេច​យល់​ព្រម​រួច​ហើយ​លើ​ការ​ចង់​បាន​របស់ Liverpool ក្នុង​ការ​នាំ​យក​ខ្សែការពារ​ស្លាប​ដ៏​មាន​សក្ដានុពល​របស់​ Trent Alexander Arnold មក​កាន់​ទឹក​ដី​អេស្ប៉ាញ​​ក្នុ​ងតម្លៃ​២៥​លាន​អឺរ៉ូ ប៉ុន្តែ​ស្រាប់​តែ​ពេល​នេះ​​ហង្ស​បាន​បដិសេធ​សំណើ​នេះ​ទៅ​វិញ​។

        ហង្ស​ក្រហម​ហាក់​សម្ដែង​ការ​មិន​ចង់​លក់​ខ្សែការពារ​ស្លាប​របស់​ខ្លួន​ខាង​លើ​ទេ ​បន្ទាប់​ពី​ឃើញ​ថា Real Madrid ហាក់​ចង់​បាន​ខ្លាំង​​​ ព្រោះ​តែ​ Real Madrid មាន​បញ្ហា​ខ្សែការពារ​ច្រើន​នាក់​ហើយ​ត្រូវ​ការ​កម្លាំង​ថ្មី​មក​ជួ​យ​ក្រុម​បន្ថែម​ទៀត​​សម្រាប់​ត្រៀម​​​ការ​ប្រកួត​ប្រជែង​​ La Liga ឬ​ក៏ UEFA Champions League ។ Arnold ជា​គោលដៅ​របស់​ស្ដេច​ស​ជា​យូរ​មក​ហើយ គ្រាន់​តែ​ការ​ចរចា​ហាក់​មិន​ត្រូវ​គ្នា​សោះ​ ដោយ​ឡែក​កាល​ពី​ពេល​ថ្មី​ៗ​ក្រោយ​ពេល​ឮ​ដំណឹង​ថា Liverpool ហាក់​​ចង់​បាន​​តម្លៃ​ខ្ពស់​មួយ​សម្រាប់​ខ្សែការពារ ​រូប​នេះ​ ​ក្លិប​យក្ស​របស់​អេស្ប៉ាញ​បាន​ដាក់​តម្លៃ​ភ្លាម​ ប៉ុន្តែ​នៅ​តែ​ Liverpool មិន​ចង់​លក់​ទៅ​វិញ​។

        ​ទោះ​បី​ជា​យ៉ាង​ណា​ Real Madrid នៅ​តែ​តាម​ប្រមាញ់​យក​ខ្សែការពារ​ស្លាប​រូប​នេះ​មក​​ ​បើ​ទោះ​បី​ជា​ ហង្ស​ក្រហម​បាន​បដិសេធ​សំណើ​មួយ​លើក​ជា​ពីរ​លើក​ក៏​ដោយ ព្រោះ​កីឡាករ​ជម្រើស​ជាតិ​អង់គ្លេស​រូប​នេះ​ត្រូវ​បាន​ក្លិប​របស់​អេស្ប៉ាញ​ជឿ​ថា នឹង​អាច​ជួយ​ក្រុម​បាន​ច្រើន៕
        `,
    },
    {
        id: 4,
        img: "static/assets/images/news/news1.png",
        title: "Lamine Yamal ចង់​ឈ្នះ​​​ពាន​១​ក្នុង​ចំណោម​ពីរ​នេះ​ឲ្យ​បាន​សិន​មុន​ឈាន​ដល់ Ballon d'Or",
        date: "2024-12-19 16:21",
        url: "newsDetail.html",
        description: `«​មុន​ពេល​ខ្ញុំ​អាច​ឈ្នះ​ពាន Ballon d'Or ខ្ញុំ​ចង់​ឈ្នះ​ពាន​ Champions League ជាមួយ Barcelona ឬ​ក៏​ឈ្នះ​​ពាន World Cup ជាមួយ​ប្រទេស​អេស្ប៉ាញ​របស់​ខ្ញុំ​ឲ្យ​បាន​១​សិន​»។
        នេះ​ជា​សម្ដី​របស់​ Lamine Yamal ប្រាប់​ទៅ​កាន់​កាសែត​ Marca ។
        
        Yamal គឺ​ជា​យុវជន​​ម្នាក់​ដែល​មាន​ភាព​លេចធ្លោ​ខ្លាំង​ក្រោយ​​​ពេល​​រូប​គេ​​បង្ហាញ​សមត្ថភាព​ដ៏​អស្ចារ្យ​ក្នុង​ព្រឹត្តិការណ៍ UERO 2024 ហើយ​បាន​ជួយ​អេស្ប៉ាញ​លើក​ពាន​​ធំ​ប្រាំ​ទ្វីប​​អឺរ៉ុប​មួយ​នេះ​។ មិន​ត្រឹម​ប៉ុណ្ណោះ​ពេល​នេះ​គេ​ជា​កម្លាំង​ស្នូល​មួយ​ដ៏​សំខាន់​របស់ Barcelona ក្នុង​ការ​ជួយ​ក្រុម​ឲ្យ​យក​ឈ្នះ​ទៅ​លើ​ក្រុម​ធំ​ៗ​ជា​ច្រើន​នៅ​អឺរ៉ុប​ដូច​ជា​ការ​យក​ឈ្នះ Real Madrid និង Bayern Munich ជា​​​ដើម​។
        
        គិត​ត្រឹម​ពេល​នេះ​គេ​បាន​ចូល​លេង​ឲ្យ​ក្រុម​ Barcelona ​បាន​ចំនួន​៥៤​ប្រកួត​ហើយ​ និង​រក​បាន​១០​គ្រាប់​​ថែម​ទៀ​ត​ផង​។ ចំណែក​ជា​មួយ​ជម្រើស​ជាតិ​​វិញ​គេ​បាន​ចូល​លេង​បាន​​១៧​ប្រកួត ពោល​ក៏​រក​បា​ន​៣​គ្រាប់​ផង​ដែរ​​៕`,
    },
    {
        id: 5,
        img: "static/assets/images/news/news2.png",
        title: "ប្រៀបធៀប​ Onana និង De Gea ​រដូវ​កាល​២០២៤-២០២៥​",
        date: "2025-01-01 12:47",
        url: "newsDetail.html",
        description: `Andre Onana បាន​ផ្ទេរ​មក​កាន់​ Manchester United ​កាល​ពី​ខែ​កក្កដា ឆ្នាំ​មុន ខណៈ​ដែល​ Devid De Gea ​ទើប​តែ​​រក​ក្លឹប​បាន​លេង​នៅ​រដូវ​កាល​ថ្មី​នេះ​ពោល​គឺ​គេ​បាន​ចូលរួម​ជាមួយ Fiorentina លីគ​កំពូល​របស់​អ៊ីតាលី​។ 
        គិត​មក​ដល់​ពេល​នេះ​សម្រាប់​រដូវ​២០២៤-២០២៥​​ Onana គេ​បាន​បង្ហាញ​ខ្លួន​សរុប​ចំនួន ២២​លើក ខណៈ​ដែល De Gea បាន​បង្ហាញ​ខ្លួន​១៤​លើក​ក្នុង​នោះ​បើ​ធ្វើ​ការ​ប្រៀបធៀប​​គ្នា​ហាក់​ខុស​គ្នា​តិច​តួច​ប៉ុន្តែ​បើ​មើល​ទៅ​លើ​ ភាគរយ​ បិទ​ដៃគូ​មិន​ឲ្យ​ទាត់​ចូល​​ឃើញ​ថា De Gea ល្អ​ជាង​ដាច់។

        Onana ៖ ២២​ប្រកួត​ លេង​បាន​​សរុប​១៩៨០​​នាទី ​បិទ​ Clean Sheets ចំនួន ៧​លើក,​ របូត​គ្រាប់​បាល់​សរុប​២៧​គ្រាប់,​​ សង្គ្រោះ​បាល់​ដែល​ស៊ុត​ចំ​គោលដៅ​​គ្រោះ​ថ្នាក់​​​ ៥៦​លើក, គិត​ជា​ភាគរយ​នៃ​ការ​សង្គ្រោះ​បាល់​មាន​៦៧.១០​% , សង្គ្រោះ​បាន​៥៦​លើក, បោះ​​បាល់​​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​បាន៨០៥​លើក​, បង្កើត​កំហុសឲ្យ​របូត​គ្រាប់​បាល់​ចំនួន​២លើក​។

        De Gea ៖ ១៤​ប្រកួត​លេង​បាន​១២២១​នាទី​ បិទ​ Clean Sheets បាន​ចំនួន ៧​លើក​​ដូច​គ្នា​ តែ​ចំនួន​ប្រកួត​តិច​ជាង​, មិន​បាន​បង្កើត​កំហុស​ឲ្យ​មាន​គ្រាប់​​​បាល់​ទេ​, របូត​គ្រាប់​បាល់​ចំនួន ១១​គ្រាប់​, សង្គ្រោះ​បាល់​​​ដែល​គ្រោះថ្នាក់​​ស៊ុត​​ចំ​គោលដៅ​​ ៤៤​​លើក​, គិត​ជា​ភាគរយ​សង្រ្គោះ​បាន​ ៨០​ភាគ​រយ , បោះ​បាល់​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​ ៣៦៥លើក​។
        
        ​តាម​រយៈទិន្នន័យ​នេះ​ឃើញ​ថា De Gea បិទ​ Clean Sheets បាន​ស្មើ​គ្នា​៧​លើក​​ ប៉ុន្តែ​បើ​មើល​ទៅ​ចំនួន​ប្រកួត​គឺ De Gea ចូល​លេង​បាន​តែ​១៤​ប្រកួត​ប៉ុណ្ណោះ​។ ក្នុង​នោះ​​ចំណុច​​​ល្អ​មួយ​​ទៀត​គឺ​ De Gea គ្មាន​កំហុស​​ដែល​នាំ​ឲ្យ​​របូត​គ្រាប់​បាល់​នោះ​ទេ​ ខណៈ​ការ​សង្គ្រោះ​នានា​​គឺ​ប្រហាក់​ប្រហែល​គ្នា​៕ ​​​​​​​​​​`,
    },
    {
        id: 6,
        img: "static/assets/images/news/news3.png",
        title: "Real Madrid រួចរាល់​ក្នុង​ការ​ចំណាយ​២៥​​លាន​​អឺរ៉ូ​លើ​ខ្សែ​ការពារ​ Liverpool រូប​នេះ​តែ​ក្លិប​ឆ្លើយ​បែប​នេះ​",
        date: "2025-01-03 16:21",
        url: "newsDetail.html",
        description: `Real Madrid បាន​​សម្រេច​យល់​ព្រម​រួច​ហើយ​លើ​ការ​ចង់​បាន​របស់ Liverpool ក្នុង​ការ​នាំ​យក​ខ្សែការពារ​ស្លាប​ដ៏​មាន​សក្ដានុពល​របស់​ Trent Alexander Arnold មក​កាន់​ទឹក​ដី​អេស្ប៉ាញ​​ក្នុ​ងតម្លៃ​២៥​លាន​អឺរ៉ូ ប៉ុន្តែ​ស្រាប់​តែ​ពេល​នេះ​​ហង្ស​បាន​បដិសេធ​សំណើ​នេះ​ទៅ​វិញ​។

        ហង្ស​ក្រហម​ហាក់​សម្ដែង​ការ​មិន​ចង់​លក់​ខ្សែការពារ​ស្លាប​របស់​ខ្លួន​ខាង​លើ​ទេ ​បន្ទាប់​ពី​ឃើញ​ថា Real Madrid ហាក់​ចង់​បាន​ខ្លាំង​​​ ព្រោះ​តែ​ Real Madrid មាន​បញ្ហា​ខ្សែការពារ​ច្រើន​នាក់​ហើយ​ត្រូវ​ការ​កម្លាំង​ថ្មី​មក​ជួ​យ​ក្រុម​បន្ថែម​ទៀត​​សម្រាប់​ត្រៀម​​​ការ​ប្រកួត​ប្រជែង​​ La Liga ឬ​ក៏ UEFA Champions League ។ Arnold ជា​គោលដៅ​របស់​ស្ដេច​ស​ជា​យូរ​មក​ហើយ គ្រាន់​តែ​ការ​ចរចា​ហាក់​មិន​ត្រូវ​គ្នា​សោះ​ ដោយ​ឡែក​កាល​ពី​ពេល​ថ្មី​ៗ​ក្រោយ​ពេល​ឮ​ដំណឹង​ថា Liverpool ហាក់​​ចង់​បាន​​តម្លៃ​ខ្ពស់​មួយ​សម្រាប់​ខ្សែការពារ ​រូប​នេះ​ ​ក្លិប​យក្ស​របស់​អេស្ប៉ាញ​បាន​ដាក់​តម្លៃ​ភ្លាម​ ប៉ុន្តែ​នៅ​តែ​ Liverpool មិន​ចង់​លក់​ទៅ​វិញ​។

        ​ទោះ​បី​ជា​យ៉ាង​ណា​ Real Madrid នៅ​តែ​តាម​ប្រមាញ់​យក​ខ្សែការពារ​ស្លាប​រូប​នេះ​មក​​ ​បើ​ទោះ​បី​ជា​ ហង្ស​ក្រហម​បាន​បដិសេធ​សំណើ​មួយ​លើក​ជា​ពីរ​លើក​ក៏​ដោយ ព្រោះ​កីឡាករ​ជម្រើស​ជាតិ​អង់គ្លេស​រូប​នេះ​ត្រូវ​បាន​ក្លិប​របស់​អេស្ប៉ាញ​ជឿ​ថា នឹង​អាច​ជួយ​ក្រុម​បាន​ច្រើន៕
        `,
    },
    {
        id: 7,
        img: "static/assets/images/news/news1.png",
        title: "Lamine Yamal ចង់​ឈ្នះ​​​ពាន​១​ក្នុង​ចំណោម​ពីរ​នេះ​ឲ្យ​បាន​សិន​មុន​ឈាន​ដល់ Ballon d'Or",
        date: "2024-12-19 16:21",
        url: "newsDetail.html",
        description: `«​មុន​ពេល​ខ្ញុំ​អាច​ឈ្នះ​ពាន Ballon d'Or ខ្ញុំ​ចង់​ឈ្នះ​ពាន​ Champions League ជាមួយ Barcelona ឬ​ក៏​ឈ្នះ​​ពាន World Cup ជាមួយ​ប្រទេស​អេស្ប៉ាញ​របស់​ខ្ញុំ​ឲ្យ​បាន​១​សិន​»។
        នេះ​ជា​សម្ដី​របស់​ Lamine Yamal ប្រាប់​ទៅ​កាន់​កាសែត​ Marca ។
        
        Yamal គឺ​ជា​យុវជន​​ម្នាក់​ដែល​មាន​ភាព​លេចធ្លោ​ខ្លាំង​ក្រោយ​​​ពេល​​រូប​គេ​​បង្ហាញ​សមត្ថភាព​ដ៏​អស្ចារ្យ​ក្នុង​ព្រឹត្តិការណ៍ UERO 2024 ហើយ​បាន​ជួយ​អេស្ប៉ាញ​លើក​ពាន​​ធំ​ប្រាំ​ទ្វីប​​អឺរ៉ុប​មួយ​នេះ​។ មិន​ត្រឹម​ប៉ុណ្ណោះ​ពេល​នេះ​គេ​ជា​កម្លាំង​ស្នូល​មួយ​ដ៏​សំខាន់​របស់ Barcelona ក្នុង​ការ​ជួយ​ក្រុម​ឲ្យ​យក​ឈ្នះ​ទៅ​លើ​ក្រុម​ធំ​ៗ​ជា​ច្រើន​នៅ​អឺរ៉ុប​ដូច​ជា​ការ​យក​ឈ្នះ Real Madrid និង Bayern Munich ជា​​​ដើម​។
        
        គិត​ត្រឹម​ពេល​នេះ​គេ​បាន​ចូល​លេង​ឲ្យ​ក្រុម​ Barcelona ​បាន​ចំនួន​៥៤​ប្រកួត​ហើយ​ និង​រក​បាន​១០​គ្រាប់​​ថែម​ទៀ​ត​ផង​។ ចំណែក​ជា​មួយ​ជម្រើស​ជាតិ​​វិញ​គេ​បាន​ចូល​លេង​បាន​​១៧​ប្រកួត ពោល​ក៏​រក​បា​ន​៣​គ្រាប់​ផង​ដែរ​​៕`,
    },
    {
        id: 8,
        img: "static/assets/images/news/news2.png",
        title: "ប្រៀបធៀប​ Onana និង De Gea ​រដូវ​កាល​២០២៤-២០២៥​",
        date: "2025-01-01 12:47",
        url: "newsDetail.html",
        description: `Andre Onana បាន​ផ្ទេរ​មក​កាន់​ Manchester United ​កាល​ពី​ខែ​កក្កដា ឆ្នាំ​មុន ខណៈ​ដែល​ Devid De Gea ​ទើប​តែ​​រក​ក្លឹប​បាន​លេង​នៅ​រដូវ​កាល​ថ្មី​នេះ​ពោល​គឺ​គេ​បាន​ចូលរួម​ជាមួយ Fiorentina លីគ​កំពូល​របស់​អ៊ីតាលី​។ 
        គិត​មក​ដល់​ពេល​នេះ​សម្រាប់​រដូវ​២០២៤-២០២៥​​ Onana គេ​បាន​បង្ហាញ​ខ្លួន​សរុប​ចំនួន ២២​លើក ខណៈ​ដែល De Gea បាន​បង្ហាញ​ខ្លួន​១៤​លើក​ក្នុង​នោះ​បើ​ធ្វើ​ការ​ប្រៀបធៀប​​គ្នា​ហាក់​ខុស​គ្នា​តិច​តួច​ប៉ុន្តែ​បើ​មើល​ទៅ​លើ​ ភាគរយ​ បិទ​ដៃគូ​មិន​ឲ្យ​ទាត់​ចូល​​ឃើញ​ថា De Gea ល្អ​ជាង​ដាច់។

        Onana ៖ ២២​ប្រកួត​ លេង​បាន​​សរុប​១៩៨០​​នាទី ​បិទ​ Clean Sheets ចំនួន ៧​លើក,​ របូត​គ្រាប់​បាល់​សរុប​២៧​គ្រាប់,​​ សង្គ្រោះ​បាល់​ដែល​ស៊ុត​ចំ​គោលដៅ​​គ្រោះ​ថ្នាក់​​​ ៥៦​លើក, គិត​ជា​ភាគរយ​នៃ​ការ​សង្គ្រោះ​បាល់​មាន​៦៧.១០​% , សង្គ្រោះ​បាន​៥៦​លើក, បោះ​​បាល់​​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​បាន៨០៥​លើក​, បង្កើត​កំហុសឲ្យ​របូត​គ្រាប់​បាល់​ចំនួន​២លើក​។

        De Gea ៖ ១៤​ប្រកួត​លេង​បាន​១២២១​នាទី​ បិទ​ Clean Sheets បាន​ចំនួន ៧​លើក​​ដូច​គ្នា​ តែ​ចំនួន​ប្រកួត​តិច​ជាង​, មិន​បាន​បង្កើត​កំហុស​ឲ្យ​មាន​គ្រាប់​​​បាល់​ទេ​, របូត​គ្រាប់​បាល់​ចំនួន ១១​គ្រាប់​, សង្គ្រោះ​បាល់​​​ដែល​គ្រោះថ្នាក់​​ស៊ុត​​ចំ​គោលដៅ​​ ៤៤​​លើក​, គិត​ជា​ភាគរយ​សង្រ្គោះ​បាន​ ៨០​ភាគ​រយ , បោះ​បាល់​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​ ៣៦៥លើក​។
        
        ​តាម​រយៈទិន្នន័យ​នេះ​ឃើញ​ថា De Gea បិទ​ Clean Sheets បាន​ស្មើ​គ្នា​៧​លើក​​ ប៉ុន្តែ​បើ​មើល​ទៅ​ចំនួន​ប្រកួត​គឺ De Gea ចូល​លេង​បាន​តែ​១៤​ប្រកួត​ប៉ុណ្ណោះ​។ ក្នុង​នោះ​​ចំណុច​​​ល្អ​មួយ​​ទៀត​គឺ​ De Gea គ្មាន​កំហុស​​ដែល​នាំ​ឲ្យ​​របូត​គ្រាប់​បាល់​នោះ​ទេ​ ខណៈ​ការ​សង្គ្រោះ​នានា​​គឺ​ប្រហាក់​ប្រហែល​គ្នា​៕ ​​​​​​​​​​`,
    },
    {
        id: 9,
        img: "static/assets/images/news/news3.png",
        title: "Real Madrid រួចរាល់​ក្នុង​ការ​ចំណាយ​២៥​​លាន​​អឺរ៉ូ​លើ​ខ្សែ​ការពារ​ Liverpool រូប​នេះ​តែ​ក្លិប​ឆ្លើយ​បែប​នេះ​",
        date: "2025-01-03 16:21",
        url: "newsDetail.html",
        description: `Real Madrid បាន​​សម្រេច​យល់​ព្រម​រួច​ហើយ​លើ​ការ​ចង់​បាន​របស់ Liverpool ក្នុង​ការ​នាំ​យក​ខ្សែការពារ​ស្លាប​ដ៏​មាន​សក្ដានុពល​របស់​ Trent Alexander Arnold មក​កាន់​ទឹក​ដី​អេស្ប៉ាញ​​ក្នុ​ងតម្លៃ​២៥​លាន​អឺរ៉ូ ប៉ុន្តែ​ស្រាប់​តែ​ពេល​នេះ​​ហង្ស​បាន​បដិសេធ​សំណើ​នេះ​ទៅ​វិញ​។

        ហង្ស​ក្រហម​ហាក់​សម្ដែង​ការ​មិន​ចង់​លក់​ខ្សែការពារ​ស្លាប​របស់​ខ្លួន​ខាង​លើ​ទេ ​បន្ទាប់​ពី​ឃើញ​ថា Real Madrid ហាក់​ចង់​បាន​ខ្លាំង​​​ ព្រោះ​តែ​ Real Madrid មាន​បញ្ហា​ខ្សែការពារ​ច្រើន​នាក់​ហើយ​ត្រូវ​ការ​កម្លាំង​ថ្មី​មក​ជួ​យ​ក្រុម​បន្ថែម​ទៀត​​សម្រាប់​ត្រៀម​​​ការ​ប្រកួត​ប្រជែង​​ La Liga ឬ​ក៏ UEFA Champions League ។ Arnold ជា​គោលដៅ​របស់​ស្ដេច​ស​ជា​យូរ​មក​ហើយ គ្រាន់​តែ​ការ​ចរចា​ហាក់​មិន​ត្រូវ​គ្នា​សោះ​ ដោយ​ឡែក​កាល​ពី​ពេល​ថ្មី​ៗ​ក្រោយ​ពេល​ឮ​ដំណឹង​ថា Liverpool ហាក់​​ចង់​បាន​​តម្លៃ​ខ្ពស់​មួយ​សម្រាប់​ខ្សែការពារ ​រូប​នេះ​ ​ក្លិប​យក្ស​របស់​អេស្ប៉ាញ​បាន​ដាក់​តម្លៃ​ភ្លាម​ ប៉ុន្តែ​នៅ​តែ​ Liverpool មិន​ចង់​លក់​ទៅ​វិញ​។

        ​ទោះ​បី​ជា​យ៉ាង​ណា​ Real Madrid នៅ​តែ​តាម​ប្រមាញ់​យក​ខ្សែការពារ​ស្លាប​រូប​នេះ​មក​​ ​បើ​ទោះ​បី​ជា​ ហង្ស​ក្រហម​បាន​បដិសេធ​សំណើ​មួយ​លើក​ជា​ពីរ​លើក​ក៏​ដោយ ព្រោះ​កីឡាករ​ជម្រើស​ជាតិ​អង់គ្លេស​រូប​នេះ​ត្រូវ​បាន​ក្លិប​របស់​អេស្ប៉ាញ​ជឿ​ថា នឹង​អាច​ជួយ​ក្រុម​បាន​ច្រើន៕
        `,
    },
    {
        id: 10,
        img: "static/assets/images/news/news1.png",
        title: "Lamine Yamal ចង់​ឈ្នះ​​​ពាន​១​ក្នុង​ចំណោម​ពីរ​នេះ​ឲ្យ​បាន​សិន​មុន​ឈាន​ដល់ Ballon d'Or",
        date: "2024-12-19 16:21",
        url: "newsDetail.html",
        description: `«​មុន​ពេល​ខ្ញុំ​អាច​ឈ្នះ​ពាន Ballon d'Or ខ្ញុំ​ចង់​ឈ្នះ​ពាន​ Champions League ជាមួយ Barcelona ឬ​ក៏​ឈ្នះ​​ពាន World Cup ជាមួយ​ប្រទេស​អេស្ប៉ាញ​របស់​ខ្ញុំ​ឲ្យ​បាន​១​សិន​»។
        នេះ​ជា​សម្ដី​របស់​ Lamine Yamal ប្រាប់​ទៅ​កាន់​កាសែត​ Marca ។
        
        Yamal គឺ​ជា​យុវជន​​ម្នាក់​ដែល​មាន​ភាព​លេចធ្លោ​ខ្លាំង​ក្រោយ​​​ពេល​​រូប​គេ​​បង្ហាញ​សមត្ថភាព​ដ៏​អស្ចារ្យ​ក្នុង​ព្រឹត្តិការណ៍ UERO 2024 ហើយ​បាន​ជួយ​អេស្ប៉ាញ​លើក​ពាន​​ធំ​ប្រាំ​ទ្វីប​​អឺរ៉ុប​មួយ​នេះ​។ មិន​ត្រឹម​ប៉ុណ្ណោះ​ពេល​នេះ​គេ​ជា​កម្លាំង​ស្នូល​មួយ​ដ៏​សំខាន់​របស់ Barcelona ក្នុង​ការ​ជួយ​ក្រុម​ឲ្យ​យក​ឈ្នះ​ទៅ​លើ​ក្រុម​ធំ​ៗ​ជា​ច្រើន​នៅ​អឺរ៉ុប​ដូច​ជា​ការ​យក​ឈ្នះ Real Madrid និង Bayern Munich ជា​​​ដើម​។
        
        គិត​ត្រឹម​ពេល​នេះ​គេ​បាន​ចូល​លេង​ឲ្យ​ក្រុម​ Barcelona ​បាន​ចំនួន​៥៤​ប្រកួត​ហើយ​ និង​រក​បាន​១០​គ្រាប់​​ថែម​ទៀ​ត​ផង​។ ចំណែក​ជា​មួយ​ជម្រើស​ជាតិ​​វិញ​គេ​បាន​ចូល​លេង​បាន​​១៧​ប្រកួត ពោល​ក៏​រក​បា​ន​៣​គ្រាប់​ផង​ដែរ​​៕`,
    },
    {
        id: 11,
        img: "static/assets/images/news/news2.png",
        title: "ប្រៀបធៀប​ Onana និង De Gea ​រដូវ​កាល​២០២៤-២០២៥​",
        date: "2025-01-01 12:47",
        url: "newsDetail.html",
        description: `Andre Onana បាន​ផ្ទេរ​មក​កាន់​ Manchester United ​កាល​ពី​ខែ​កក្កដា ឆ្នាំ​មុន ខណៈ​ដែល​ Devid De Gea ​ទើប​តែ​​រក​ក្លឹប​បាន​លេង​នៅ​រដូវ​កាល​ថ្មី​នេះ​ពោល​គឺ​គេ​បាន​ចូលរួម​ជាមួយ Fiorentina លីគ​កំពូល​របស់​អ៊ីតាលី​។ 
        គិត​មក​ដល់​ពេល​នេះ​សម្រាប់​រដូវ​២០២៤-២០២៥​​ Onana គេ​បាន​បង្ហាញ​ខ្លួន​សរុប​ចំនួន ២២​លើក ខណៈ​ដែល De Gea បាន​បង្ហាញ​ខ្លួន​១៤​លើក​ក្នុង​នោះ​បើ​ធ្វើ​ការ​ប្រៀបធៀប​​គ្នា​ហាក់​ខុស​គ្នា​តិច​តួច​ប៉ុន្តែ​បើ​មើល​ទៅ​លើ​ ភាគរយ​ បិទ​ដៃគូ​មិន​ឲ្យ​ទាត់​ចូល​​ឃើញ​ថា De Gea ល្អ​ជាង​ដាច់។

        Onana ៖ ២២​ប្រកួត​ លេង​បាន​​សរុប​១៩៨០​​នាទី ​បិទ​ Clean Sheets ចំនួន ៧​លើក,​ របូត​គ្រាប់​បាល់​សរុប​២៧​គ្រាប់,​​ សង្គ្រោះ​បាល់​ដែល​ស៊ុត​ចំ​គោលដៅ​​គ្រោះ​ថ្នាក់​​​ ៥៦​លើក, គិត​ជា​ភាគរយ​នៃ​ការ​សង្គ្រោះ​បាល់​មាន​៦៧.១០​% , សង្គ្រោះ​បាន​៥៦​លើក, បោះ​​បាល់​​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​បាន៨០៥​លើក​, បង្កើត​កំហុសឲ្យ​របូត​គ្រាប់​បាល់​ចំនួន​២លើក​។

        De Gea ៖ ១៤​ប្រកួត​លេង​បាន​១២២១​នាទី​ បិទ​ Clean Sheets បាន​ចំនួន ៧​លើក​​ដូច​គ្នា​ តែ​ចំនួន​ប្រកួត​តិច​ជាង​, មិន​បាន​បង្កើត​កំហុស​ឲ្យ​មាន​គ្រាប់​​​បាល់​ទេ​, របូត​គ្រាប់​បាល់​ចំនួន ១១​គ្រាប់​, សង្គ្រោះ​បាល់​​​ដែល​គ្រោះថ្នាក់​​ស៊ុត​​ចំ​គោលដៅ​​ ៤៤​​លើក​, គិត​ជា​ភាគរយ​សង្រ្គោះ​បាន​ ៨០​ភាគ​រយ , បោះ​បាល់​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​ ៣៦៥លើក​។
        
        ​តាម​រយៈទិន្នន័យ​នេះ​ឃើញ​ថា De Gea បិទ​ Clean Sheets បាន​ស្មើ​គ្នា​៧​លើក​​ ប៉ុន្តែ​បើ​មើល​ទៅ​ចំនួន​ប្រកួត​គឺ De Gea ចូល​លេង​បាន​តែ​១៤​ប្រកួត​ប៉ុណ្ណោះ​។ ក្នុង​នោះ​​ចំណុច​​​ល្អ​មួយ​​ទៀត​គឺ​ De Gea គ្មាន​កំហុស​​ដែល​នាំ​ឲ្យ​​របូត​គ្រាប់​បាល់​នោះ​ទេ​ ខណៈ​ការ​សង្គ្រោះ​នានា​​គឺ​ប្រហាក់​ប្រហែល​គ្នា​៕ ​​​​​​​​​​`,
    },
    {
        id: 12,
        img: "static/assets/images/news/news3.png",
        title: "Real Madrid រួចរាល់​ក្នុង​ការ​ចំណាយ​២៥​​លាន​​អឺរ៉ូ​លើ​ខ្សែ​ការពារ​ Liverpool រូប​នេះ​តែ​ក្លិប​ឆ្លើយ​បែប​នេះ​",
        date: "2025-01-03 16:21",
        url: "newsDetail.html",
        description: `Real Madrid បាន​​សម្រេច​យល់​ព្រម​រួច​ហើយ​លើ​ការ​ចង់​បាន​របស់ Liverpool ក្នុង​ការ​នាំ​យក​ខ្សែការពារ​ស្លាប​ដ៏​មាន​សក្ដានុពល​របស់​ Trent Alexander Arnold មក​កាន់​ទឹក​ដី​អេស្ប៉ាញ​​ក្នុ​ងតម្លៃ​២៥​លាន​អឺរ៉ូ ប៉ុន្តែ​ស្រាប់​តែ​ពេល​នេះ​​ហង្ស​បាន​បដិសេធ​សំណើ​នេះ​ទៅ​វិញ​។

        ហង្ស​ក្រហម​ហាក់​សម្ដែង​ការ​មិន​ចង់​លក់​ខ្សែការពារ​ស្លាប​របស់​ខ្លួន​ខាង​លើ​ទេ ​បន្ទាប់​ពី​ឃើញ​ថា Real Madrid ហាក់​ចង់​បាន​ខ្លាំង​​​ ព្រោះ​តែ​ Real Madrid មាន​បញ្ហា​ខ្សែការពារ​ច្រើន​នាក់​ហើយ​ត្រូវ​ការ​កម្លាំង​ថ្មី​មក​ជួ​យ​ក្រុម​បន្ថែម​ទៀត​​សម្រាប់​ត្រៀម​​​ការ​ប្រកួត​ប្រជែង​​ La Liga ឬ​ក៏ UEFA Champions League ។ Arnold ជា​គោលដៅ​របស់​ស្ដេច​ស​ជា​យូរ​មក​ហើយ គ្រាន់​តែ​ការ​ចរចា​ហាក់​មិន​ត្រូវ​គ្នា​សោះ​ ដោយ​ឡែក​កាល​ពី​ពេល​ថ្មី​ៗ​ក្រោយ​ពេល​ឮ​ដំណឹង​ថា Liverpool ហាក់​​ចង់​បាន​​តម្លៃ​ខ្ពស់​មួយ​សម្រាប់​ខ្សែការពារ ​រូប​នេះ​ ​ក្លិប​យក្ស​របស់​អេស្ប៉ាញ​បាន​ដាក់​តម្លៃ​ភ្លាម​ ប៉ុន្តែ​នៅ​តែ​ Liverpool មិន​ចង់​លក់​ទៅ​វិញ​។

        ​ទោះ​បី​ជា​យ៉ាង​ណា​ Real Madrid នៅ​តែ​តាម​ប្រមាញ់​យក​ខ្សែការពារ​ស្លាប​រូប​នេះ​មក​​ ​បើ​ទោះ​បី​ជា​ ហង្ស​ក្រហម​បាន​បដិសេធ​សំណើ​មួយ​លើក​ជា​ពីរ​លើក​ក៏​ដោយ ព្រោះ​កីឡាករ​ជម្រើស​ជាតិ​អង់គ្លេស​រូប​នេះ​ត្រូវ​បាន​ក្លិប​របស់​អេស្ប៉ាញ​ជឿ​ថា នឹង​អាច​ជួយ​ក្រុម​បាន​ច្រើន៕
        `,
    },
    {
        id: 13,
        img: "static/assets/images/news/news1.png",
        title: "Lamine Yamal ចង់​ឈ្នះ​​​ពាន​១​ក្នុង​ចំណោម​ពីរ​នេះ​ឲ្យ​បាន​សិន​មុន​ឈាន​ដល់ Ballon d'Or",
        date: "2024-12-19 16:21",
        url: "newsDetail.html",
        description: `«​មុន​ពេល​ខ្ញុំ​អាច​ឈ្នះ​ពាន Ballon d'Or ខ្ញុំ​ចង់​ឈ្នះ​ពាន​ Champions League ជាមួយ Barcelona ឬ​ក៏​ឈ្នះ​​ពាន World Cup ជាមួយ​ប្រទេស​អេស្ប៉ាញ​របស់​ខ្ញុំ​ឲ្យ​បាន​១​សិន​»។
        នេះ​ជា​សម្ដី​របស់​ Lamine Yamal ប្រាប់​ទៅ​កាន់​កាសែត​ Marca ។
        
        Yamal គឺ​ជា​យុវជន​​ម្នាក់​ដែល​មាន​ភាព​លេចធ្លោ​ខ្លាំង​ក្រោយ​​​ពេល​​រូប​គេ​​បង្ហាញ​សមត្ថភាព​ដ៏​អស្ចារ្យ​ក្នុង​ព្រឹត្តិការណ៍ UERO 2024 ហើយ​បាន​ជួយ​អេស្ប៉ាញ​លើក​ពាន​​ធំ​ប្រាំ​ទ្វីប​​អឺរ៉ុប​មួយ​នេះ​។ មិន​ត្រឹម​ប៉ុណ្ណោះ​ពេល​នេះ​គេ​ជា​កម្លាំង​ស្នូល​មួយ​ដ៏​សំខាន់​របស់ Barcelona ក្នុង​ការ​ជួយ​ក្រុម​ឲ្យ​យក​ឈ្នះ​ទៅ​លើ​ក្រុម​ធំ​ៗ​ជា​ច្រើន​នៅ​អឺរ៉ុប​ដូច​ជា​ការ​យក​ឈ្នះ Real Madrid និង Bayern Munich ជា​​​ដើម​។
        
        គិត​ត្រឹម​ពេល​នេះ​គេ​បាន​ចូល​លេង​ឲ្យ​ក្រុម​ Barcelona ​បាន​ចំនួន​៥៤​ប្រកួត​ហើយ​ និង​រក​បាន​១០​គ្រាប់​​ថែម​ទៀ​ត​ផង​។ ចំណែក​ជា​មួយ​ជម្រើស​ជាតិ​​វិញ​គេ​បាន​ចូល​លេង​បាន​​១៧​ប្រកួត ពោល​ក៏​រក​បា​ន​៣​គ្រាប់​ផង​ដែរ​​៕`,
    },
    {
        id: 14,
        img: "static/assets/images/news/news2.png",
        title: "ប្រៀបធៀប​ Onana និង De Gea ​រដូវ​កាល​២០២៤-២០២៥​",
        date: "2025-01-01 12:47",
        url: "newsDetail.html",
        description: `Andre Onana បាន​ផ្ទេរ​មក​កាន់​ Manchester United ​កាល​ពី​ខែ​កក្កដា ឆ្នាំ​មុន ខណៈ​ដែល​ Devid De Gea ​ទើប​តែ​​រក​ក្លឹប​បាន​លេង​នៅ​រដូវ​កាល​ថ្មី​នេះ​ពោល​គឺ​គេ​បាន​ចូលរួម​ជាមួយ Fiorentina លីគ​កំពូល​របស់​អ៊ីតាលី​។ 
        គិត​មក​ដល់​ពេល​នេះ​សម្រាប់​រដូវ​២០២៤-២០២៥​​ Onana គេ​បាន​បង្ហាញ​ខ្លួន​សរុប​ចំនួន ២២​លើក ខណៈ​ដែល De Gea បាន​បង្ហាញ​ខ្លួន​១៤​លើក​ក្នុង​នោះ​បើ​ធ្វើ​ការ​ប្រៀបធៀប​​គ្នា​ហាក់​ខុស​គ្នា​តិច​តួច​ប៉ុន្តែ​បើ​មើល​ទៅ​លើ​ ភាគរយ​ បិទ​ដៃគូ​មិន​ឲ្យ​ទាត់​ចូល​​ឃើញ​ថា De Gea ល្អ​ជាង​ដាច់។

        Onana ៖ ២២​ប្រកួត​ លេង​បាន​​សរុប​១៩៨០​​នាទី ​បិទ​ Clean Sheets ចំនួន ៧​លើក,​ របូត​គ្រាប់​បាល់​សរុប​២៧​គ្រាប់,​​ សង្គ្រោះ​បាល់​ដែល​ស៊ុត​ចំ​គោលដៅ​​គ្រោះ​ថ្នាក់​​​ ៥៦​លើក, គិត​ជា​ភាគរយ​នៃ​ការ​សង្គ្រោះ​បាល់​មាន​៦៧.១០​% , សង្គ្រោះ​បាន​៥៦​លើក, បោះ​​បាល់​​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​បាន៨០៥​លើក​, បង្កើត​កំហុសឲ្យ​របូត​គ្រាប់​បាល់​ចំនួន​២លើក​។

        De Gea ៖ ១៤​ប្រកួត​លេង​បាន​១២២១​នាទី​ បិទ​ Clean Sheets បាន​ចំនួន ៧​លើក​​ដូច​គ្នា​ តែ​ចំនួន​ប្រកួត​តិច​ជាង​, មិន​បាន​បង្កើត​កំហុស​ឲ្យ​មាន​គ្រាប់​​​បាល់​ទេ​, របូត​គ្រាប់​បាល់​ចំនួន ១១​គ្រាប់​, សង្គ្រោះ​បាល់​​​ដែល​គ្រោះថ្នាក់​​ស៊ុត​​ចំ​គោលដៅ​​ ៤៤​​លើក​, គិត​ជា​ភាគរយ​សង្រ្គោះ​បាន​ ៨០​ភាគ​រយ , បោះ​បាល់​ឲ្យ​គ្នា​ទៅ​វិញ​ទៅ​មក​ ៣៦៥លើក​។
        
        ​តាម​រយៈទិន្នន័យ​នេះ​ឃើញ​ថា De Gea បិទ​ Clean Sheets បាន​ស្មើ​គ្នា​៧​លើក​​ ប៉ុន្តែ​បើ​មើល​ទៅ​ចំនួន​ប្រកួត​គឺ De Gea ចូល​លេង​បាន​តែ​១៤​ប្រកួត​ប៉ុណ្ណោះ​។ ក្នុង​នោះ​​ចំណុច​​​ល្អ​មួយ​​ទៀត​គឺ​ De Gea គ្មាន​កំហុស​​ដែល​នាំ​ឲ្យ​​របូត​គ្រាប់​បាល់​នោះ​ទេ​ ខណៈ​ការ​សង្គ្រោះ​នានា​​គឺ​ប្រហាក់​ប្រហែល​គ្នា​៕ ​​​​​​​​​​`,
    },
    {
        id: 15,
        img: "static/assets/images/news/news3.png",
        title: "Real Madrid រួចរាល់​ក្នុង​ការ​ចំណាយ​២៥​​លាន​​អឺរ៉ូ​លើ​ខ្សែ​ការពារ​ Liverpool រូប​នេះ​តែ​ក្លិប​ឆ្លើយ​បែប​នេះ​",
        date: "2025-01-03 16:21",
        url: "newsDetail.html",
        description: `Real Madrid បាន​​សម្រេច​យល់​ព្រម​រួច​ហើយ​លើ​ការ​ចង់​បាន​របស់ Liverpool ក្នុង​ការ​នាំ​យក​ខ្សែការពារ​ស្លាប​ដ៏​មាន​សក្ដានុពល​របស់​ Trent Alexander Arnold មក​កាន់​ទឹក​ដី​អេស្ប៉ាញ​​ក្នុ​ងតម្លៃ​២៥​លាន​អឺរ៉ូ ប៉ុន្តែ​ស្រាប់​តែ​ពេល​នេះ​​ហង្ស​បាន​បដិសេធ​សំណើ​នេះ​ទៅ​វិញ​។

        ហង្ស​ក្រហម​ហាក់​សម្ដែង​ការ​មិន​ចង់​លក់​ខ្សែការពារ​ស្លាប​របស់​ខ្លួន​ខាង​លើ​ទេ ​បន្ទាប់​ពី​ឃើញ​ថា Real Madrid ហាក់​ចង់​បាន​ខ្លាំង​​​ ព្រោះ​តែ​ Real Madrid មាន​បញ្ហា​ខ្សែការពារ​ច្រើន​នាក់​ហើយ​ត្រូវ​ការ​កម្លាំង​ថ្មី​មក​ជួ​យ​ក្រុម​បន្ថែម​ទៀត​​សម្រាប់​ត្រៀម​​​ការ​ប្រកួត​ប្រជែង​​ La Liga ឬ​ក៏ UEFA Champions League ។ Arnold ជា​គោលដៅ​របស់​ស្ដេច​ស​ជា​យូរ​មក​ហើយ គ្រាន់​តែ​ការ​ចរចា​ហាក់​មិន​ត្រូវ​គ្នា​សោះ​ ដោយ​ឡែក​កាល​ពី​ពេល​ថ្មី​ៗ​ក្រោយ​ពេល​ឮ​ដំណឹង​ថា Liverpool ហាក់​​ចង់​បាន​​តម្លៃ​ខ្ពស់​មួយ​សម្រាប់​ខ្សែការពារ ​រូប​នេះ​ ​ក្លិប​យក្ស​របស់​អេស្ប៉ាញ​បាន​ដាក់​តម្លៃ​ភ្លាម​ ប៉ុន្តែ​នៅ​តែ​ Liverpool មិន​ចង់​លក់​ទៅ​វិញ​។

        ​ទោះ​បី​ជា​យ៉ាង​ណា​ Real Madrid នៅ​តែ​តាម​ប្រមាញ់​យក​ខ្សែការពារ​ស្លាប​រូប​នេះ​មក​​ ​បើ​ទោះ​បី​ជា​ ហង្ស​ក្រហម​បាន​បដិសេធ​សំណើ​មួយ​លើក​ជា​ពីរ​លើក​ក៏​ដោយ ព្រោះ​កីឡាករ​ជម្រើស​ជាតិ​អង់គ្លេស​រូប​នេះ​ត្រូវ​បាន​ក្លិប​របស់​អេស្ប៉ាញ​ជឿ​ថា នឹង​អាច​ជួយ​ក្រុម​បាន​ច្រើន៕
        `,
    },
];

// declare banner data
const bannerData = [
    {
        id: 1,
        img: "static/assets/images/banners/banner.png"
    },
    {
        id: 2,
        img: "static/assets/images/banners/banner.png"
    },
];

// Render banner slide
document.addEventListener("DOMContentLoaded", () => {
    const bannerWrapper = document.querySelector('.banner-wrapper');
    const renderBanners = (banners) => {
        banners.forEach(banner => {
            const bannerCard = document.createElement('div');
            bannerCard.className = 'swiper-slide banner-card';
            bannerCard.innerHTML = `<img src="${banner.img}" alt="banner">`;
            bannerWrapper.appendChild(bannerCard);
        });
    };

    renderBanners(bannerData);
    console.table(bannerData);

    // Banner Swiper
    new Swiper(".bannerSwiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false,
        autoplay: {
            delay: 5000,
        },
    });
});

// get element class news container and pagination container
const newsContainer = document.querySelector('.news-container');
const paginationContainer = document.querySelector('.pagination-container');

// set number items per page
let currentPage = 1;
const itemsPerPage = 9;

// Render news list
const renderNewsList = (page = 1) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.delete("id");
    history.replaceState(null, "", `?${urlSearchParams.toString()}`);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // const sortedNewsData = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
    const reverseNewsData = [...newsData].reverse();
    const newsToRender = reverseNewsData.slice(start, end);

    newsContainer.innerHTML = `
        <div class="news-list-container">
            ${newsToRender.map((news) => `    
                <div class="news-wrapper">
                    <div onclick="viewNewsArticle(${news.id})">
                        <div class="news-image">
                            <img src="${news.img}" alt="${news.title}">
                        </div>
                        <div class="title-wrapper">
                            <p class="news-title">${news.title.slice(0, 70)}...</p>
                            <div class="date-wrapper">
                                <img src="static/assets/icons/calendar.svg" alt="date" class="calendar-icon">
                                <span class="news-date"> 
                                    ${new Date(news.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} 
                                    ${new Date(news.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
    
    // Render pagination controls
    renderPaginationControls(reverseNewsData.length, page);
};

const renderPaginationControls = (totalItems, currentPage) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxVisibleButtons = 5;
    let pageButtons = [];

    if (totalPages <= maxVisibleButtons) {
        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(createPageButton(i, currentPage));
        }
    } else {
        if (currentPage <= 3) {
            for (let i = 1; i <= 3; i++) {
                pageButtons.push(createPageButton(i, currentPage));
            }
            pageButtons.push(createEllipsisButton(currentPage + 3));
            pageButtons.push(createPageButton(totalPages, currentPage));
        } else if (currentPage > totalPages - 3) {
            pageButtons.push(createPageButton(1, currentPage));
            pageButtons.push(createEllipsisButton(currentPage - 3));
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pageButtons.push(createPageButton(i, currentPage));
            }
        } else {
            pageButtons.push(createPageButton(1, currentPage));
            pageButtons.push(createEllipsisButton(currentPage - 3));
            pageButtons.push(createPageButton(currentPage - 1, currentPage));
            pageButtons.push(createPageButton(currentPage, currentPage));
            pageButtons.push(createPageButton(currentPage + 1, currentPage));
            pageButtons.push(createEllipsisButton(currentPage + 3));
            pageButtons.push(createPageButton(totalPages, currentPage));
        }
    }

    paginationContainer.innerHTML = `
       <div class="pagination">
            <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
               Previous
            </button>
            ${pageButtons.join('')}
            <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
                Next
            </button>
        </div>
    `;
};

const createPageButton = (page, currentPage) => {
    return `
        <button onclick="changePage(${page})" class="${page === currentPage ? 'active' : ''}">
            ${page}
        </button>
    `;
};

const createEllipsisButton = (page) => {
    return `
        <button onclick="changePage(${page})" class="ellipsis">
            ...
        </button>
    `;
};

const changePage = (page) => {
    currentPage = page;
    renderNewsList(currentPage);
};

// Render news and latest news
const renderNews = (news) => {
    newsContainer.innerHTML = `
        <div class="news-detail-container">
            <div class="main-news-wrapper">
                <div class="news-title big-title">${news.title}</div>
                <div class="news-content-wrapper">
                    <div class="news-image">
                        <img src="${news.img}" alt="news">
                    </div>
                    <div class="right-content">
                        <div class="date-wrapper">
                            <div class="calendar-icon"><img src="static/assets/icons/calendar.svg" alt="calendar-icon"></div>
                            <span class="news-date"> 
                                ${new Date(news.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} 
                                ${new Date(news.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                            </span>
                        </div>
                        <div class="news-title small-title">${news.title}</div>
                    </div>
                </div>
                <div class="news-description">
                    ${news.description}
                </div>
            </div>
            <div class="latest-news-wrapper">
                <span class="title">អត្ថបទចុងក្រោយ</span>
                <div class="latest-news-item-wrapper">
                    ${newsData
                        .slice(-5)
                        .map((latestNews) => `
                        <div onclick="viewNewsArticle(${latestNews.id})" class="news-items">
                            <img src="${latestNews.img}" alt="${latestNews.title}">
                            <div>
                                <p>${latestNews.title.slice(0, 30)}...</p>
                                <div class="date-wrapper">
                                    <div class="calendar-icon"><img src="static/assets/icons/calendar.svg" alt="calendar-icon"></div>
                                    <span class="news-date"> 
                                        ${new Date(news.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} 
                                    </span>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    `;
};

// view news article handler
window.viewNewsArticle = (id) => {
    const article = newsData.find((item) => item.id === id);
    if (article) {
        history.pushState(null, "", `?id=${id}`);
        renderNews(article);
    }
    if (window.location.search.includes(`id=${id}`)) {
        document.querySelector('.pagination').style.display = 'none';
    }
};

// intial news page
const initializeNews = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"), 10);

    if (id) {
        const article = newsData.find((item) => item.id === id);
        if (article) {
            renderNews(article);
            return;
        }
    }
    renderNewsList(currentPage);
};

initializeNews();

// Handle browser back/forward navigation
window.onpopstate = initializeNews;
