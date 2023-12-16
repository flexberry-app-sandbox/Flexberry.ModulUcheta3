package Modul_ucheta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_ucheta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Услуги
 */
@Entity(name = "IISModul_uchetaУслуги")
@Table(schema = "public", name = "Услуги")
public class Uslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "ЗатрачВремя")
    private Double затрачвремя;

    @Column(name = "ЕдиницаВремени")
    private String единицавремени;


    public Uslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getЗатрачВремя() {
      return затрачвремя;
    }

    public void setЗатрачВремя(Double затрачвремя) {
      this.затрачвремя = затрачвремя;
    }

    public String getЕдиницаВремени() {
      return единицавремени;
    }

    public void setЕдиницаВремени(String единицавремени) {
      this.единицавремени = единицавремени;
    }


}