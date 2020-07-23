import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                navbar: {
                    "contact": "contact",
                    "about": "about",
                    "language": "ע"
                },
                banner: {
                    "header": "YOUR WEBSITE, JUST THE WAY YOU LIKE IT",
                    "get-proposal": "get proposal"
                },
                about: {
                    "who-i-am": {
                        "header": "who i am",
                        "content": "An experienced and capable full-stack and web developer with proven industry experience that will tailor a technological solution to your needs."
                    },
                    "what-i-do": {
                        "header": "what i do",
                        "content": "Build from scratch, or upgrade and maintain existing websites, applications or desktop programs."
                    },
                    "what-i-did": {
                        "header": "what i did",
                        "content": {
                            "part-one": "Developed and maintained web and desktop solutions in real-estate, e-commerce and cyber security fields.",
                            "part-two": "Previously worked for industry leading companies including BuyMe, Localize, Trusteer and IBM Security."
                        }
                    },
                    "what-i-use": {
                        "header": "what i use",
                        "content": "I have worked on C++, JAVA, Clojure, PHP, React, Ember, Jquery projects, with MySQL and PostgreSQL projects, using latest Git and CI/CD practices."
                    }
                },
                contact: {
                    "header": "leave a message",
                    "name": "Name",
                    "phone": "Phone Number",
                    "email": "Email",
                    "message": "Message",
                    "submit": "submit",
                    "success": "Message Sent Successfully!",
                    "error": {
                        "phone": "Phone number is required and should be at least 9 numbers long",
                        "email": "Email field is required"
                    }
                }
            }
        },
        he: {
            translations: {
                navbar: {
                    "contact": "צרו קשר",
                    "about": "אודות",
                    "language": "en"
                },
                banner: {
                    "header": "האתר שלך, כמו שתמיד רצית",
                    "get-proposal": "קבל/י הצעה"
                },
                about: {
                    "who-i-am": {
                        "header": "מי אני",
                        "content": "מתכנת פול-סטאק מנוסה ומוכשר, עם נסיון עשיר מהתעשיה שיתאים פתרון טכנולוגי לצרכים שלך."
                    },
                    "what-i-do": {
                        "header": "מה אני עושה",
                        "content": "בונה מאפס, משדרג ומתחזק אתרים קיימים, אפליקציות ותוכנות."
                    },
                    "what-i-did": {
                        "header": "מה עשיתי",
                        "content": {
                            "part-one": "פיתחתי ותחזקתי פתרונות תוכנה בתחומי הנדל\"ן, המסחר האלקטרוני, ואבטחת המידע.",
                            "part-two": "עבדתי בחברות מובילות בתעשיית ההייטק, ביניהן, BuyMe, מדלן, Trusteer, ו-IBM."
                        }
                    },
                    "what-i-use": {
                        "header": "במה אני משתמש",
                        "content": "עבדתי על מערכות שונות ומגוונות, ביניהן C++, ג'אווה, קלז'ור, PHP, ריאקט, אמבר, בשילוב עם MySQL, ו-PostgreSQL, תוך הקפדה על המתודולוגיות העדכניות ביותר של גיט ופרישה רציפה."
                    }
                },
                contact: {
                    "header": "השאר הודעה",
                    "name": "שם",
                    "phone": "מספר טלפון",
                    "email": "דואר אלקטרוני",
                    "message": "הודעה",
                    "submit": "שלח/י",
                    "success": "ההודעה נשלחה בהצלחה!",
                    "error": {
                        "phone": "מספר הטלפון דרוש ועליו להיות לפחות 9 ספרות",
                        "email": "דואר אלקטרוני הוא שדה נדרש"
                    }
                }
            }
        }
    },
    fallback: "en",

    // starting namespace
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: '.',

    interpolation: {
        escapeValue: false, // not needed for react
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;