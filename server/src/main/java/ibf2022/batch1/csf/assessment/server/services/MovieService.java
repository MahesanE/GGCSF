package ibf2022.batch1.csf.assessment.server.services;

import java.io.StringReader;
import java.util.Collections;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import ibf2022.batch1.csf.assessment.server.models.Comment;
import ibf2022.batch1.csf.assessment.server.models.Review;
import ibf2022.batch1.csf.assessment.server.repositories.MovieRepository;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;;

@Service
public class MovieService {

	// TODO: Task 4
	// DO NOT CHANGE THE METHOD'S SIGNATURE

	@Autowired
	private MovieRepository movieRepository;

	@Value("${nytimes.api.key}")
	private String apiKey;

	public static final String apiUrl = "https://api.nytimes.com/svc/movies/v2/reviews";

	public List<Review> searchReviews(String query) {

		//String encodedQuery = UriUtils.encodeQueryParam(query, StandardCharsets.UTF_8);
		String url = UriComponentsBuilder.fromUriString(apiUrl)
				.path("/search.json")
				.queryParam("query", query.replaceAll(" ", "+"))
				.queryParam("api-key", apiKey)
				.toUriString();

		RequestEntity<Void> request = RequestEntity.get(url)
				.accept(MediaType.APPLICATION_JSON)
				.build();

		RestTemplate restTemplate = new RestTemplate();

		ResponseEntity<String> response = null;
		try {
			response = restTemplate.exchange(request, String.class);
		} catch (RestClientException e) {
			e.printStackTrace();
			return Collections.emptyList();
		}

		String payload = response.getBody();
		JsonReader reader = Json.createReader(new StringReader(payload));
		JsonObject json = reader.readObject();
		JsonArray jsonArray = json.getJsonArray("results");


		
		return jsonArray.stream()
				.map(v -> v.asJsonObject())
				.map(Review::toReview)
				.map(review -> {
					review.setCommentCount(movieRepository.countComments(review.getTitle()));
					return review;
				}).toList();
	}

	// public void insertComment(Document document){
	// 	movieRepository.insertComment(document);
	// }

	public void insertComment(Comment comment){
		movieRepository.insertComment(comment);
	}



}
