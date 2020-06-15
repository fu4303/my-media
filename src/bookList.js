 const booksReading = [
    {   id: "21",
        title: "Neuromancer",
        isbn: "0441012035",
        rating: 4
    },
    {   
        id: "22",
        title: "What It Takes: The Way to the White House",
        isbn: "9780679746492",
        rating: 4
    },
    {   
        id: "23",
        title: "London Match",
        isbn: "0345332687",
        rating: 3
    }
]

const booksRead = [
    {   
        id: "6",
        title: "Burning Chrome",
        isbn: "9780060539825",
        rating: 4
    },
    {   
        id: "7",
        title: "Mexico set",
        isbn: "0345314999",
        rating: 4
    },
    {   
        id: "8",
        title: "Berlin game",
        isbn: "9780345418340",
        rating: 4
    },
    {   
        id: "9",
        title: "The Score",
        isbn: "0446677736",
        rating: 4
    },
    {   
        id: "10",
        title: "The Mourner",
        isbn: "9780446677721",
        rating: 3
    },
    {   
        id: "11",
        title: "The Quiet American",
        isbn: "0140185003",
        rating: 5
    },
    {   
        id: "12",
        title: "Our Man in Havana",
        isbn: "9780140184938",
        rating: 4
    },
    {   
        id: "13",
        title: "Factotum",
        isbn: "9780876852637",
        rating: 3
    },
    {   
        id: "14",
        title: "Post Office",
        isbn: "0061177571",
        rating: 5
    },
    {   
        id: "15",
        title: "Pulp",
        isbn: "9780876859261",
        rating: 3
    },
    {   
        id: "16",
        title: "The New Confessions of an Economic Hit Man",
        isbn: "1626566747",
        rating: 3
    },
    {   
        id: "17",
        title: "The Outfit",
        isbn: "0446674672",
        rating: 4
    },
    {   
        id: "18",
        title: "The Man With The Getaway Face",
        isbn: "0446674664",
        rating: 4
    },
    {   
        id: "19",
        title: "The Hunter",
        isbn: "0226770990",
        rating: 4
    },
    {   
        id: "20",
        title: "Dream Team",
        isbn: "0345520491",
        rating: 4
    }
    
]

const handshakeFiveBooks = [
    {   
        id: "1",
        title: "A Confederacy of Dunces",
        isbn: "0802130208",
        rating: 5
    },
    {
        id: "2",
        title: "Post Office",
        isbn: "0061177571",
        rating: 5
    },
    {   
        id: "3",
        title: "The Bonfire of the Vanities",
        isbn: "9780553381344",
        rating: 5
    },
    {   
        id: "4",
        title: "The Guns of August",
        isbn: "0345476093",
        rating: 5
    },
    {   
        id: "5",
        title: "Slaughterhouse-Five",
        isbn: "0385333846",
        rating: 5
    }
]

export {booksRead, booksReading, handshakeFiveBooks}





// How To

// Book covers can be accessed using Cover ID (internal cover ID), OLID (Open Library ID), ISBN, OCLC, LCCN and other identifiers like librarything and goodreads.

// The covers are available in 3 sizes:

//     S: Small, suitable for use as a thumbnail on a results page on Open Library,
//     M: Medium, suitable for display on a details page on Open Library and,
//     L: Large

// The URL pattern to access book covers is:

// http://covers.openlibrary.org/b/$key/$value-$size.jpg

// Where:

//     key can be any one of ISBN, OCLC, LCCN, OLID and ID (case-insensitive)
//     value is the value of the chosen key
//     size can be one of S, M and L for small, medium and large respectively.



 