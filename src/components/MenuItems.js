export const navMenus = {
  about: [
    {
      title: "Administrator's Message",
      path: "/about/history",
      cName: "dropdown-link",
    },
    {
      title: "Proprietor's Message",
      path: "/about/administrators-message",
      cName: "dropdown-link",
    },
    {
      title: "History of the School",
      path: "/about/proprietors-message",
      cName: "dropdown-link",
    },

    { title: "Contact Us", path: "/about/contact-us", cName: "dropdown-link" },
    {
      title: "Faculty & Staff Directory",
      path: "/about/Conduct",
      cName: "dropdown-link",
    },
  ],

  admission: [
    // {
    //     title: 'Academics',
    //     description: `At ${process.env.REACT_APP_SITE_NAME}, we aim to provide an innovative learning program that promotes our values of Respect, Diversity, Sustainability and Excellence.`,
    //     path: '/academic',
    //     cName: 'dropdown-link',
    // },
    {
      title: "How to Apply",
      path: "/academics/how_to_apply",
      cName: "dropdown-link",
      description: "",
    },

    {
      title: " Admission Form",
      path: "/",
      cName: "dropdown-link",
      description: "",
    },

    {
      title: "Transfer",
      path: "/academics/result_&_scholarships",
      cName: "dropdown-link",
    },
  ],
  learn: [
    // {
    //     title: 'Welcome',
    //     description: `We are delighted that you are interested in applying to ${process.env.REACT_APP_SITE_NAME}`,
    //     path: '/learn',
    //     cName: 'dropdown-link'
    // },

    {
      title: "Junior School",
      path: "/learn/primary_school",
      cName: "dropdown-link",
    },

    {
      title: "Senior School",
      path: "/learn/secondary_school",
      cName: "dropdown-link",
    },
  ],
  school: [
    { title: "Curriculum", path: "/school/curriculum", cName: "dropdown-link" },

    {
      title: "Academic Structure",
      path: "/school/academic-structure",
      cName: "dropdown-link",
    },
    {
      title: "Academic Probation",
      path: "/school/academic-probation",
      cName: "dropdown-link",
    },
  ],
  news: [
    { title: "school news", path: "/news/school_news", cName: "dropdown-link" },
    {
      title: "school activities",
      path: "/news/school_activities",
      cName: "dropdown-link",
    },
  ],
};

export default navMenus;
