package ibf2022.batch1.csf.assessment.server.controllers;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ibf2022.batch1.csf.assessment.server.models.Comment;
import ibf2022.batch1.csf.assessment.server.models.Review;
import ibf2022.batch1.csf.assessment.server.services.MovieService;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;

@RequestMapping("/api")
@RestController
public class MovieController {

	// TODO: Task 3, Task 4, Task 8

	@Autowired
	private MovieService movieService;

   
    @GetMapping("/search")
	public ResponseEntity<String> searchReviews(@RequestParam String query) {

		List<Review> reviews = movieService.searchReviews(query);

		JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
		reviews.stream()
				.forEach(review -> {
					arrayBuilder.add(review.toJson());
				});

		return ResponseEntity.ok(arrayBuilder.build().toString());

	}

	@PostMapping(path="/comment", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public ResponseEntity<Void> addMongo(Comment comment){
		System.out.println(comment);

		// Document document = comment.toDocument();
		//if ask for json need to docu

		movieService.insertComment(comment);
		return ResponseEntity.ok().build();
	}

}
