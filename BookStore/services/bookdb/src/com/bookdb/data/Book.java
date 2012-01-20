
package com.bookdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  bookdb.Book
 *  01/19/2012 08:15:40
 * 
 */
public class Book {

    private Integer id;
    private Language language;
    private String title;
    private String author;
    private Date publishdate;
    private String cover;
    private Set<com.bookdb.data.Download> downloads = new HashSet<com.bookdb.data.Download>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Date getPublishdate() {
        return publishdate;
    }

    public void setPublishdate(Date publishdate) {
        this.publishdate = publishdate;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public Set<com.bookdb.data.Download> getDownloads() {
        return downloads;
    }

    public void setDownloads(Set<com.bookdb.data.Download> downloads) {
        this.downloads = downloads;
    }

}
