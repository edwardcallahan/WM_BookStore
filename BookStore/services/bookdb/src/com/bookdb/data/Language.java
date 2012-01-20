
package com.bookdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  bookdb.Language
 *  01/19/2012 08:15:40
 * 
 */
public class Language {

    private Integer id;
    private String language;
    private String abbreviation;
    private Integer numbooks;
    private Integer numdownloads;
    private Set<com.bookdb.data.Book> books = new HashSet<com.bookdb.data.Book>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public Integer getNumbooks() {
        return numbooks;
    }

    public void setNumbooks(Integer numbooks) {
        this.numbooks = numbooks;
    }

    public Integer getNumdownloads() {
        return numdownloads;
    }

    public void setNumdownloads(Integer numdownloads) {
        this.numdownloads = numdownloads;
    }

    public Set<com.bookdb.data.Book> getBooks() {
        return books;
    }

    public void setBooks(Set<com.bookdb.data.Book> books) {
        this.books = books;
    }

}
