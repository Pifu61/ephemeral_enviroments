package com.example.moviecatalog;

import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import java.util.List;

@Dao
public interface MovieDao {
    @Query("SELECT * FROM movie")
    List<Movie> getAll();

    @Insert
    void insert(Movie movie);

    @Delete
    void delete(Movie movie);
}
