// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Work in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-books",
          title: "books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-favorites",
        
          title: "Favorites",
        
        description: "A list of my favorite things",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/favorites/";
          
        },
      },{id: "books-leave-society",
          title: 'Leave Society',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/leave_society/";
            },},{id: "books-less-than-zero",
          title: 'Less Than Zero',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/less_than_zero/";
            },},{id: "books-shoplifting-from-american-apparel",
          title: 'Shoplifting from American Apparel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/shoplifting_from_american_apparel/";
            },},{id: "books-siddhartha",
          title: 'Siddhartha',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/siddhartha/";
            },},{id: "books-taipei",
          title: 'Taipei',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/taipei/";
            },},{id: "books-the-novelist",
          title: 'The Novelist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_novelist/";
            },},{id: "books-trainspotting",
          title: 'Trainspotting',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/trainspotting/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6E%61%70%70%6C%61%63%68%6C%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'Linkedin',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },];
