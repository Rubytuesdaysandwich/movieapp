import Movie from "@/app/movie.model";

const movie = new Movie({
    title: 'The Shawshank Redemption',
    description: 'Highly rated drama film',
    // ...
    });
    movie.save((err) => {
        if (err) {
        console.error(err);
        } else {
        console.log('Movie saved successfully');
        }
        });