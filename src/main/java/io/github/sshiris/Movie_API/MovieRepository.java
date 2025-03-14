package io.github.sshiris.Movie_API;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    Optional<Movie> getMovieByImdbId(String imdbId);
}
