package Modul_ucheta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_ucheta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ОказанныеУслуги
 */
@Entity(name = "IISModul_uchetaОказанныеУслуги")
@Table(schema = "public", name = "ОказанныеУслуги")
public class OkazannyeUslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Uslugi")
    @Convert("Uslugi")
    @Column(name = "Услуги", length = 16, unique = true, nullable = false)
    private UUID _uslugiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Uslugi", insertable = false, updatable = false)
    private Uslugi uslugi;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dogovor")
    @Convert("Dogovor")
    @Column(name = "Договор", length = 16, unique = true, nullable = false)
    private UUID _dogovorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dogovor", insertable = false, updatable = false)
    private Dogovor dogovor;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetVremeni")
    @Convert("RaschetVremeni")
    @Column(name = "РасчетВремени", length = 16, unique = true, nullable = false)
    private UUID _raschetvremeniid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetVremeni", insertable = false, updatable = false)
    private RaschetVremeni raschetvremeni;


    public OkazannyeUslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}