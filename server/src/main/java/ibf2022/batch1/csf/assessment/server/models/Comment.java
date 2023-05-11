package ibf2022.batch1.csf.assessment.server.models;

import org.bson.Document;

public class Comment {
    private String name;
    private Integer rating;
    private String comment;
    private String movieName;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Integer getRating() {
        return rating;
    }
    public void setRating(Integer rating) {
        this.rating = rating;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    public String getMovieName() {
        return movieName;
    }
    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public Document toDocument() {
        Document document = new Document();
        document.put("name", this.name);
        document.put("rating", this.rating);
        document.put("comment", this.comment);
        document.put("movieName", this.movieName);
        return document;
    }
    
    @Override
    public String toString() {
        return "Comment [name=" + name + ", rating=" + rating + ", comment=" + comment + ", movieName=" + movieName
                + "]";
    }
    
}
