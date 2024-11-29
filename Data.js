const datasource = [
    {
        data: [
            { name: 'C218 Figma Project', status: 'Completed', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62LVhts8-ERiNmlrfHQShVXasUYH38KKSRw&s' },
            { name: 'C349 Worksheet',status: 'Incomplete', image: 'https://cdn.pixabay.com/photo/2021/01/30/12/20/microsoft-word-5963679_1280.png' }
        ],
        icon: 'book', // Added icon property
        title: 'School Tasks',
        bgColor: 'darkblue',
    },

    {
        data: [
            { name: 'Wash Clothes',status: 'Completed', image: 'https://www.electrolux.com.sg/contentassets/d6b1886669614ad39a6890e396b7bb6d/how-to-clean-washing-machine-thumbnail-mo.jpg?width=464'},
            { name: 'Cook Dinner',status: 'Completed', image: 'https://m.media-amazon.com/images/I/818fVbkrNvL._AC_UF894,1000_QL80_.jpg'}
        ],
        icon: 'house', // Added icon property
        title: 'Home Tasks',
        bgColor: 'blue',
    },
    {
        data: [
            { name: 'Walk The Dog',status: 'Incomplete', image: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Labrador.jpg?v=1645179151' },
            { name: 'Jogging', status: 'Incomplete',image:'https://hips.hearstapps.com/hmg-prod/images/rw-imagelibrary2020-hires-401-1675366389.jpg' }
        ],
        icon: 'tree', // Added icon property
        title: 'Outdoor Tasks',
        bgColor: 'lightblue',
    },
];

export {datasource}